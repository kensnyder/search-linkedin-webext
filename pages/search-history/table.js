import './table.css';

document.querySelector('main').innerHTML = buildTable();

function buildTable() {

	// get localstorage data
	const history = [
		{ name: 'Bill Gates', href: 'https://www.linkedin.com/search/results/all/?keywords=Bill%20Gates&origin=GLOBAL_SEARCH_HEADER', date: +new Date },
		{ name: 'Herbert Hoover', href: 'https://www.linkedin.com/search/results/all/?keywords=Herbert%20Hoover&origin=GLOBAL_SEARCH_HEADER', date: +new Date },
	];

	return `
		<h1>My Recent Searches</h1>
		<table>
			${history.map(search => {
				return `
					<tr>
						<td>
							<a href="${esc(search.href)}" target="_blank">
								${esc(search.name)}
							</a>
						</td>
						<td>${dateFormat(search.date)}</td>
					</tr>
				`;	
			}).join('')}
		<table>
	`;
}

function esc(string) {
	return (
		String(string || '')
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
	);
}

function dateFormat(timestamp) {
	const date = new Date(timestamp);
	return date.getDay() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
}
