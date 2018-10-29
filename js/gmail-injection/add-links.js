import { linkedIn } from '../../libs/linkedIn';

setInterval(addLinks, 1000);

// get the "chrome://..." URL to our logo icon
const imgUrl = browser.runtime.getURL('/icons/logo-32.png');

function addLinks() {
	// find every span that has attributes "name" and "email"
	[...document.querySelectorAll('span[name][email]')].forEach(addLink);
}

function addLink(span) {
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
	const name = span.getAttribute('name');
	// construct the LinkedIn URL
	const href = linkedIn.getSearchUrl(name);
	// add the link element
	const link = document.createElement('a');
	link.setAttribute('href', href);
	link.setAttribute('targe', '_blank');
	link.className = 'search-linkedin';
	link.style.backgroundImage = `url(${imgUrl})`;
	// record search when clicked
	link.addEventListener('click', function() {
		linkedIn.recordSearch(name, 'gmail');
	}, false);
	// add link element
	span.appendChild(link);
}
