// /* globals should */
// import Superstore from 'superstore';
// import { init } from '../pwr-of-you';
//
// describe('"Pwr Of You" Subscription Offer Prompt', () => {
//
// 	let flags;
//
// 	const localStorage = new Superstore('local', 'n-ui.subscription-offer-prompt')
// 	const sessionStorage = new Superstore('session', 'next.product-selector')
//
// 	beforeEach(() => {
// 		return Promise.all([
// 			localStorage.set('last-closed', Date.now() - (1000 * 60 * 60 * 24 * 30)),
// 			sessionStorage.set('last-seen', Date.now())
// 			flags = { get: (val) => val === 'b2cMessagePrompt' || val === 'PowerOfYouSlider' }
// 		])
// 	});
//
// 	it('should not show if must show lionel instead', () =>
// 		{} // TODO
// 	);
//
// 	it('should have correct attributes', () =>
// 		init(flags).then(popup => {
// 			popup.el.getAttribute('class').should.include('n-sliding-popup subscription-prompt');
// 			popup.el.getAttribute('data-n-component').should.equal('o-sliding-popup');
// 			popup.el.getAttribute('data-n-sliding-popup-position').should.equal('bottom left');
// 		})
// 	);
//
// 	it('should have correct html', () =>
// 		init().then(popup => {
// 			popup.el.innerHTML.should.contain('Want to get your share')
// 		})
// 	);
//
// 	it('should set onClose to function', () =>
// 		init().then(popup => {
// 			popup.el.onClose.should.be.a('function')
// 		})
// 	);
//
// 	it('should store date in local storage when closed', () =>
// 		init()
// 			.then(popup => {
// 				popup.el.onClose();
// 				return localStorage.get('last-closed');
// 			})
// 			// give a 1s buffer
// 			.then(lastClosed => lastClosed.should.be.closeTo(Date.now(), 1000))
// 	);
//
//
// 	it('should not show if last shown within 30 days', () => {
// 		localStorage.set('last-closed', Date.now() + (1000 * 60 * 60 * 24 * 29));
// 		return init().then(popup => should.not.exist(popup));
// 	});
//
// });
