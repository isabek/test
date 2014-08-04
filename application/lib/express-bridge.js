var express = require("express");

var ExpressBridge = function (options) {
    var app = express();


    app.engine('html', options.renderer.getRenderer());
    app.set('view engine', 'html');
    app.set('views', options.viewsDir);
    app.set('view cache', false);

    app.use(express.static(options.staticDir));
    app.use(express.urlencoded());
    app.use(express.json());

    app.use(express.cookieParser('CL1CKH3R3'));
    app.use(express.cookieSession());

    app.use(app.router);


    return app;
};

module.exports = ExpressBridge;