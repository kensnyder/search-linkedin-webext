// npm dependencies
const fs = require('fs');
const chalk = require('chalk');

module.exports = { bump };

function bump() {
	const manifest = fs.readFileSync(`./extension/manifest.json`, {encoding: 'utf8'});
	try {
		const data = JSON.parse(manifest);
		const [ major, minor, rev ] = data.version.split('.');
		const newRev = Number(rev) + 1;
		const newVersion = `${major}.${minor}.${newRev}`;
		data.version = newVersion;
		const newManifest = JSON.stringify(data, null, '  ');
		fs.writeFileSync(`./extension/manifest.json`, newManifest);
		console.log(`Bumped version from ${major}.${minor}.${rev} to ${major}.${minor}.${newRev}`);
	}
	catch (e) {
		console.log(chalk.red('Error reading and updating manifest version:' + e.message));
	}
}
