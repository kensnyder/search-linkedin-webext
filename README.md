# Managing and Extending this WebExtension

## npm commands

- `install` - Install and move browser-polyfill.js to the right place
- `start` - Starts webpack watch
- `build` - Runs wepback to create the unpacked extension
- `release` - Bump manifest version and zip extensions into releasable packages:
    - Firefox: firefox.zip
    - Chrome: chrome.zip

## Environment details

This extension was developed using npm version v6.1.0 and node v8.11.2 on macOS v10.13.6. 

## Manual testing of the extension

### Chrome

1. Open a chrome tab to [chrome://extensions](chrome://extensions).
1. Make sure "Developer mode" is enabled.
1. Click "Load unpacked" and navigate to the `./extension` directory.
1. You should see an orange Sharp It icon. 
Navigate to a page and click the icon. 

### Firefox

1. Run `npm run firefox`. This will launch Firefox and install the extension temporarily.
1. You should see an orange Shapr It icon. Navigate to a page and click the icon.

## Releases

### Chrome Web Store

1. Run `npm run release`. This will bump the version in manifest.json and produce `dist/chrome.zip`.
1. Log in to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
1. Click `UPLOAD UPDATED PACKAGE` and select `dist/chrome.zip` (the version you created in step 1).
1. Confirm all details on the Store Listing page and click `PUBLISH ITEM`.

### Firefox Addon

1. Run `npm run release`. This will bump the version in manifest.json produce `dist/firefox.zip`.
1. Log in to the [Mozilla Add-on Developer Hub](https://addons.mozilla.org/en-US/developers/addon/sharpr/versions).
1. Click `Upload a New Version` and select `dist/firefox.zip` (the version you created in step 1).
1. Confirm all details on the Store Listing page and click `SUBMIT ITEM`.
