export class ContextMenuHandler {

	constructor(id) {
		this.id = id;
	}

	onClicked = (event, tab) => {
		if (event.menuItemId == this.id) {
			const search = encodeURIComponent(event.selectionText);
			browser.tabs.create({
				url: `https://www.linkedin.com/search/results/all/?keywords=${search}&origin=GLOBAL_SEARCH_HEADER`,
				index: tab.index + 1,
			});
		}
	};

}
