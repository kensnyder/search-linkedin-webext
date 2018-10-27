import { OmniboxHandler } from './OmniboxHandler.js';

const omni = new OmniboxHandler();
browser.omnibox.onInputEntered.addListener(omni.onInputEntered);