import { ContextMenuHandler } from './ContextMenuHandler.js';

const menu = new ContextMenuHandler('search-contacts');

browser.contextMenus.create({
	id: 'search-contacts',
	title: 'Search on LinkedIn',
	contexts: ['selection'],
});
browser.contextMenus.onClicked.addListener(menu.onClicked);
