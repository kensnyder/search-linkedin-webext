// handle clicks to our extension icon
browser.browserAction.onClicked.addListener(function() {
	// simply go to our search history page in a new tab
	browser.tabs.create({
		url: browser.runtime.getURL('/pages/search-history/index.html'),
	});
});