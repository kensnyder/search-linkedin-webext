browser.browserAction.onClicked.addListener(function() {
	browser.tabs.create({
		url: browser.runtime.getURL('/pages/search-history/index.html'),
	});
});