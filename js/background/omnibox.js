import { linkedIn } from '../../libs/linkedIn';

// Bail if we do not have omnibox support (Edge)
browser.omnibox &&
// Respond to ENTER being pressed by opening a search
browser.omnibox.onInputEntered.addListener(function(name, disposition) {
	// treat the entered text as the name we want to search
	const url = linkedIn.getSearchUrl(name);
	// based on user settings and whether shift was pressed
	// the disposition could trigger search in:
	if (disposition == 'currentTab') {
		// same tab
		browser.tabs.update({url});
	}
	else if (disposition == 'newForegroundTab') {
		// new tab (and switch to that tab)
		browser.tabs.create({url});
	}
	else if (disposition == 'newBackgroundTab') {
		// new tab (and stay in this tab)
		browser.tabs.create({url, active: false});
	}
	// and record the text and source of this search
	linkedIn.recordSearch(name, 'omnibox');
});