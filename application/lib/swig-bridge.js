var swig = require("swig");

var SwigBridge = function (options) {
    this._options = options;
};

SwigBridge.prototype.getRenderer = function () {

    swig.setDefaults(this._options);
    return swig.renderFile;
};

module.exports = SwigBridge;