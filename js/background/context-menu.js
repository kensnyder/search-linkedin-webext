import { linkedIn } from '../../libs/linkedIn.js';

// add an item to the right-click menu
browser.contextMenus.create({
	id: 'search-contacts',
	title: 'Search on LinkedIn',
	contexts: ['selection'],
});
// listen to all right-click menu clicks
browser.contextMenus.onClicked.addListener(function(details, tab) {
	if (details.menuItemId != 'search-contacts') {
		// this is not our menu item
		return;
	}
	// the document selection is the name we want to search
	const name = details.selectionText;
	// open a new page with the search
	browser.tabs.create({
		url: linkedIn.getSearchUrl(name),
		index: tab.index + 1,
	});
	// record that we did the search
	linkedIn.recordSearch(name, 'context menu');
});
