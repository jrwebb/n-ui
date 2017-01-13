'use strict';
const shellpromise = require('shellpromise');
const semver = require('semver');
const fetch = require('node-fetch');
const deployStatic = require('@financial-times/n-heroku-tools').deployStatic.task;
const brotli = require('brotli');
const denodeify = require('denodeify');
const path = require('path')
const fs = require('fs');
const readFile = denodeify(fs.readFile);
const writeFile = denodeify(fs.writeFile);

let tag = process.env.CIRCLE_TAG;
let versions;
let isOfficialRelease = false;

if (!tag) {
	versions = ['dummy-release'];
} else if (!semver.valid(tag) || /(beta|rc)/.test(tag)) {
	versions = [tag];
} else {
	isOfficialRelease = true;
	if (tag.charAt(0) !== 'v') {
		tag = `v${tag}`;
	}
	versions = [
		tag.split('.').slice(0, 1).join('.'),
		tag.split('.').slice(0, 2).join('.'),
		tag
	]
}

function purgeOnce (path, message) {
	return fetch(path, {
			method: 'PURGE',
			headers: {
				'Fastly-Soft-Purge': 1,
				'Fastly-Key': process.env.FASTLY_API_KEY
			}
		})
		.then(res => {
			if(!res.ok) {
				throw new Error(`failed to purge ${path}: status ${res.status}`)
			} else {
				console.log(`Purging ${path}: ${message}`) //eslint-disable-line
			}
		})
}

function purge (path) {
	return purgeOnce(path, 'going once')
		.then(() => purgeOnce(path, 'going twice'))
		.then(() => purgeOnce(path, 'going three times'))
		.then(() => purgeOnce(path, '...gone!'))
}

function getFileList (dir) {
	return shellpromise(`find . -path "./dist/${dir}/*"`)
		.then(files =>
			files.split('\n')
				.filter(f => !!f)
		)
}

function brotlify () {
	return getFileList('assets').then(files => Promise.all(
		files
			.filter(f => /\.(js|css)$/.test(f))
			.map(fileName =>
				readFile(path.join(process.cwd(), fileName), 'utf8')
					.then(brotli.compress)
					.then(contents => writeFile(path.join(process.cwd(), fileName + '.brotli'), contents))
			)
	))
}

function staticAssets () {
	return brotlify()
		.then(() => getFileList('assets'))
		.then(files => Promise.all(
			versions
				.map((version, i) => {
					return deployStatic({
						files: files,
						destination: `n-ui/cached/${version}`,
						bucket: 'ft-next-n-ui-prod',
						strip: 2,
						monitor: isOfficialRelease && i === 0, // only monitor the size of the first copy deployed,
						monitorStripDirectories: true,
						cacheControl: 'must-revalidate, max-age=1200',
						surrogateControl: 'must-revalidate, max-age=3600, stale-while-revalidate=60, stale-on-error=86400'
					})
						.then(() => files.map(file => {
							const paths = [
								`https://www.ft.com/__assets/n-ui/cached/${version}/${file.split('/').pop()}`
							];
							return Promise.all(paths.map(purge));
						}))
				})
		))
}


// salty sign
//   Usage: sign|s [options] <infile> [outfile]

//   create a signature

//   Options:

//     -h, --help                 output usage information
//     -H, --header <key: value>  add a custom header (repeatable)
//     -h, --hash <alg>           hash algorithm (default: sha256)
//     -a, --armor                output ASCII armor to STDOUT
//     -F, --force                ignore warnings and do it

function secureTemplates () {
	return getFileList('templates')
		.then(files => Promise.all(
			files
				.map(fileName => {
					return shellpromise(`salty sign ${path.join(process.cwd(), fileName)} ${path.join(process.cwd(), fileName)}.signature`)
						// .then(it => {
						// 	// console.log(it);
						// })
						// .catch(err => {
						// 	// console.log(err)
						// })
				})

		))
}

function layouts () {
	return secureTemplates()
		.then(() => getFileList('templates'))
		.then(files => Promise.all(
			versions
				.map((version) => {
					return deployStatic({
						files: files,
						destination: `templates/${version}`,
						bucket: 'ft-next-n-ui-prod',
						strip: 2,
						cacheControl: 'no-cache, max-age=0, must-revalidate'
					})
				})
		))

}



// ----- December 18th -----
// Rhys Evans [11:40 PM]
// major version used for tpl, minor for js/css. Solves the race condition.
// The app probably needs to poll for a json telling it what latest version is
// ... hmm, or that's basically an npm end point
//
// give an option to opt out of the polling entirely (for e.g. offline app)
//
// [11:41]
// add a surrogate key of minor version to every page served. Every time a minor release, soft purge all with that key

// https://github.com/Financial-Times/n-express/compare/rhys/tpl-poc?expand=1
// inline tiny js files


Promise.all([
	staticAssets(),
	layouts()
])
	.then(() => process.exit(0))
	.catch(err => {
		console.log(err) //eslint-disable-line
		process.exit(2)
	})
