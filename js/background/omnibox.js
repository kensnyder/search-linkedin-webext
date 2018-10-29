import { linkedIn } from '../../libs/linkedIn';

browser.omnibox &&
browser.omnibox.onInputEntered.addListener(function(name, disposition) {
	const url = linkedIn.getSearchUrl(name);
	if (disposition == 'currentTab') {
		browser.tabs.update({url});
	}
	else if (disposition == 'newForegroundTab') {
		browser.tabs.create({url});
	}
	else if (disposition == 'newBackgroundTab') {
		browser.tabs.create({url, active: false});
	}
	linkedIn.recordSearch(name, 'omnibox');
});