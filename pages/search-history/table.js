import { linkedIn } from '../../libs/linkedIn.js';
import './table.css';

generatePageHtml().then(html => {
	document.querySelector('main').innerHTML = html;
});

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
	return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
}
