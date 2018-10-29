import { linkedIn } from '../../libs/linkedIn.js';

browser.contextMenus.create({
	id: 'search-contacts',
	title: 'Search on LinkedIn',
	contexts: ['selection'],
});
browser.contextMenus.onClicked.addListener(function(details, tab) {
	if (details.menuItemId == 'search-contacts') {
		const name = details.selectionText;
		browser.tabs.create({
			url: linkedIn.getSearchUrl(name),
			index: tab.index + 1,
		});
		linkedIn.recordSearch(name, 'context menu');
	}
});
