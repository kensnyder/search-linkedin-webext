console.log('pwned your gmail');
setInterval(addLinks, 1000);

// get the "chrome://..." URL to our logo icon
const imgUrl = browser.runtime.getURL('/icons/logo-32.png');

function addLinks() {
	// find every span that has attributes "name" and "email"
	[...document.querySelectorAll('span[name][email]')].forEach(span => {
		if (span.nameProcessed) {
			// only process each link once
			return;
		}
		span.nameProcessed = true;
		if (span.parentNode.getAttribute('role') != 'gridcell') {
			// not an email detail page
			return;
		}
		// get the person's name
		const search = encodeURIComponent(span.getAttribute('name'));
		// construct the LinkedIn URL
		const href = `https://www.linkedin.com/search/results/all/?keywords=${search}&origin=GLOBAL_SEARCH_HEADER`;
		// add the link element
		span.innerHTML += `<a href="${href}" target="_blank" class="search-linkedin" style="background-image:url(${imgUrl})"></a>`;
	});
}
