/**
 * Expose the root command.
 */

exports = module.exports = new Command();

/**
 * Expose `Command`.
 */

exports.Command = Command;


function Command(name) {
  this.commands = [];
  this.options = [];
  this._execs = {};
  this._allowUnknownOption = false;
  this._args = [];
  this._name = name || '';
}
