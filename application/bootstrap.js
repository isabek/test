var wire = require("wire"),
    _ = require("underscore"),
    loader = require("env-config-loader"),
    DEFAULT_ENV = "dev";

global.ROOT_DIR = __dirname + '/';
global.LIB_DIR = __dirname + '/lib';
global.CONTROLLERS_DIR = __dirname + '/controllers';

loader.setEnvironment(process.env.NODE_ENV || DEFAULT_ENV);

module.exports = (function () {
    return wire(_.extend(
        loader.load('./spec.js')
    ))
})();
