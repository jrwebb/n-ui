import * as utils from './utils';
import * as lionel from './lionel';
import * as election from './us-elections';

/*
Show the subscription offer prompt.
There are currently two offers:

 - "The Lionel Slider":
   - OfferID:
    * USA: a9582121-87c2-09a7-0cc0-4caf594985d5
    * All: c1773439-53dc-df3d-9acc-20ce2ecde318
   - Show if:
    * the barrier has been seen in this session
    * browser's' TLS version is > 1.0
    * this prompt has not been closed, or was last closed more than 30 days ago

 - U.S Elections:
   - OfferID:
     * All: 62c5c138-aad3-10d7-5aa1-b5a4416f60bd
   - Show if:
     * usElection2016DiscountSlider flag is true
     * on '/us-election-2016' stream page
     * this prompt has not been closed, or was last closed more than 30 days ago

General rules:
  - Show if:
    * not logged in
    * not on a barrier page
    * b2cMessagePrompt flag is true

This will make the general checks to decide if one of the sliders should
show and which one. And then allow the prompt logic to further decide.
*/

const isLoggedIn = utils.getCookie('FTSession');

const isElectionPage = () => {
	const usElection2016SectionID = 'N2UxNTM3MzItNWNlZC00MDc5LWI3ODUtYWNmZDA2YjE0MWE2-U2VjdGlvbnM=';
	let conceptId = document.documentElement.getAttribute('data-concept-id') || null;
	return (conceptId && conceptId === usElection2016SectionID);
};
/*
@param {Object} flags -
*/
export default function init (flags) {
	const messagesEnabled = flags.get('b2cMessagePrompt');

	if (isLoggedIn() || document.querySelector('.ft-subscription-panel') || !messagesEnabled) {
		return;
	}
	else {
		if (isElectionPage()) {
			return election.init(flags);
		}
		else {
			return lionel.init();
		}
	}
}
