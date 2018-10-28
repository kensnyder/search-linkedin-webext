browser.contextMenus.create({
	id: 'search-contacts',
	title: 'Search on LinkedIn',
	contexts: ['selection'],
});
browser.contextMenus.onClicked.addListener(function(details, tab) {
	if (details.menuItemId == this.id) {
		const search = encodeURIComponent(details.selectionText);
		browser.tabs.create({
			url: `https://www.linkedin.com/search/results/all/?keywords=${search}&origin=GLOBAL_SEARCH_HEADER`,
			index: tab.index + 1,
		});
	}
});
