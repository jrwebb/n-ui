module.exports = {
	get: () => {
		let isOfficialRelease = false;
		let versions;
		const tag = process.env.CIRCLE_TAG;
		if (!tag) {
			versions = ['dummy-release'];
		} else if (!semver.valid(tag) || /(beta|rc)/.test(tag)) {
			versions = [tag];
		} else {
			versions = [
				tag,
				tag.split('.').slice(0,1).join('.')
			]
		}
		return {versions, isOfficialRelease}
	}
}

