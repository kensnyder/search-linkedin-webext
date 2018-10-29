export const linkedIn = {

	getSearchUrl: function(name) {
		const search = encodeURIComponent(name);
		const url = `https://www.linkedin.com/search/results/all/?keywords=${search}&origin=GLOBAL_SEARCH_HEADER`;
		return url;
	},

	recordSearch: async function(name, source) {
		const url = this.getSearchUrl(name);
		const history = await this.getHistory();
		history.unshift({
			name,
			url,
			source,
			date: +new Date,
		});
		browser.storage.local.set({history: JSON.stringify(history)});
	},

	getHistory: async function() {
		const storageObj = await browser.storage.local.get('history');
		let history;
		try {
			history = JSON.parse(storageObj.history);
		}
		catch (e) {
			history = [];
		}
		return history;
	},

};
