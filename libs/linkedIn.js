/**
 * Functions for constructing search URLs and managing history
 * @type {Object}
 */
export const linkedIn = {

	/**
	 * Create a LinkedIn search URL for the given name
	 * @param {String} name  A person's name to search for
	 * @return {string}
	 */
	getSearchUrl: function(name) {
		const search = encodeURIComponent(name);
		return `https://www.linkedin.com/search/results/all/?keywords=${search}&origin=GLOBAL_SEARCH_HEADER`;
	},

	/**
	 * Note that a search was conducted and save to browser storage
	 * @param {String} name  The search text
	 * @param {String} source  The source of the click (e.g. gmail, omnibox, context menu)
	 * @return {Promise<void>}
	 */
	recordSearch: async function(name, source) {
		const url = this.getSearchUrl(name);
		const history = await this.getHistory();
		history.unshift({
			name,
			url,
			source,
			date: +new Date,
		});
		return browser.storage.local.set({history: JSON.stringify(history)});
	},

	/**
	 * Get the history of all searches
	 * @return {Promise<Object[]>}
	 */
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

	/**
	 * Clear all the search history
	 * @return {Promise}
	 */
	clearHistory: function() {
		return browser.storage.local.set({history: '[]'});
	},

};
