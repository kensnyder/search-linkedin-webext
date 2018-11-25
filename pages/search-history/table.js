import { linkedIn } from '../../libs/linkedIn.js';
import './table.css';

render();

// super simple function to create html
// you would probably want to use Angular, React, Vue, or other
async function generatePageHtml() {

	const history = await linkedIn.getHistory();

	return `
		<h1>My Recent Searches</h1>
		<table>
			<tr>
				<th>Search</th>		
				<th>Source</th>		
				<th>Date</th>		
			</tr>
			${history.map(search => {
				return `
					<tr>
						<td>
							<a href="${esc(search.url)}" target="_blank">
								${esc(search.name)}
							</a>
						</td>
						<td>${esc(search.source)}</td>
						<td>${dateFormat(search.date)}</td>
					</tr>
				`;	
			}).join('')}
		<table>
		<button>Clear History</button>
	`;
}

// generate the html and insert into dom
function render() {
	generatePageHtml().then(html => {
		document.querySelector('main').innerHTML = html;
		document.querySelector('button').addEventListener('click', clearHistory);
	});
}

// remove all the history entries and re-render page
function clearHistory() {
	linkedIn.clearHistory();
	render();
}

// escape html entities
function esc(string) {
	return (
		String(string || '')
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
	);
}

// format a millisecond timestamp into preferred Locale
function dateFormat(timestamp) {
	const date = new Date(timestamp);
	return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}
