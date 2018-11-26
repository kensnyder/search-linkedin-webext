import { linkedIn } from '../../libs/linkedIn';

// get the "chrome://..." URL to our logo icon
const imgUrl = browser.runtime.getURL('/icons/logo-32.png');

// ideally you would want to use MutationObserver
setInterval(addLinks, 1000);

// functions only beyond this point

// add link for each name found in DOM
function addLinks() {
	// find every span that has attributes "name" and "email"
	[...document.querySelectorAll('span[name][email]')].forEach(addLink);
}

// add a single link for the given name
function addLink(span) {
	if (span.wasProcessed) {
		// only process each link once
		return;
	}
	span.wasProcessed = true;
	if (span.parentNode.getAttribute('role') !== 'gridcell') {
		// not an email detail page
		return;
	}
	// get the person's name
	const name = span.getAttribute('name');
	// construct the LinkedIn URL
	const href = linkedIn.getSearchUrl(name);
	// add the link element
	const a = document.createElement('a');
	a.setAttribute('href', href);
	a.setAttribute('target', '_blank');
	a.className = 'search-linkedin';
	a.style.backgroundImage = `url(${imgUrl})`;
	// record search when clicked
	a.addEventListener('click', function() {
		linkedIn.recordSearch(name, 'gmail');
	}, false);
	// show link to the right of span text
	span.appendChild(a);
}
