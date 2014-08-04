var wire = require("wire"),
    _ = require("underscore"),
    loader = require("env-config-loader"),
    DEFAULT_ENV = "development";

global.ROOT_DIR = __dirname + '/';
global.LIB_DIR = __dirname + '/lib';

loader.setEnvironment(process.env.NODE_ENV || DEFAULT_ENV);

module.exports = (function () {
    return wire(_.extend(
        loader.load('./spec.js')
    ))
})();
