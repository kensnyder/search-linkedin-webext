import { IconHandler } from './IconHandler.js';

const icon = new IconHandler();
browser.browserAction.onClicked.addListener(icon.onClicked);