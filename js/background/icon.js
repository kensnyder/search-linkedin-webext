browser.browserAction.onClicked.addListener(function(args) {
	console.log('Icon.onClicked', args);
	browser.tabs.create({
		url: browser.runtime.getURL('/pages/search-history/index.html'),
	});
});