// npm dependencies
const args = require('yargs').argv._;
const chalk = require('chalk');
// Import available commands
const { bump } = require('./cli/commands/bump.js');
// List of available commands
const commands = {
	bump,     // node cli.js bump
};
// interpret first arg as command
const command = args[0];
// notify if command is unknown
if (!(command in commands)) {
	console.log(chalk.red(`Unknown command "${command}". Known commands: ${Object.keys(commands).join(', ')}`));
	process.exit();
}
// run command
commands[command].apply(null, args.slice(1));
