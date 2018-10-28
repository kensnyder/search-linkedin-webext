document.querySelector('main').innerHTML = buildTable();

function buildTable() {

	// get localstorage data
	const history = [
		{ name: 'Bill Gates', href: '', date: +new Date },
		{ name: 'Herbert Hoover', href: '', date: +new Date },
	];

	return `
		<table class="history-table">
			${history.map(search => {
				return `
					<tr>
						<td>${esc(search.name)}</td>
						<td>${esc(search.href)}</td>
						<td>${new Date(search.date)}</td>
					</tr>
				`;	
			}).join('')}
		<table>
	`;
}

function esc(s) {
	return (
		String(s || '')
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
	);
}