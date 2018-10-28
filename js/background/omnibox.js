browser.omnibox &&
browser.omnibox.onInputEntered.addListener(function(text, disposition) {
	console.log('onInputEntered', text);
	const search = encodeURIComponent(text);
	browser.tabs.update(undefined, {
		url: `https://www.linkedin.com/search/results/all/?keywords=${search}&origin=GLOBAL_SEARCH_HEADER`,
	});
});