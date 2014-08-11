module.exports = {
    'swig-bridge': {
        create: {
            module: require("./lib/swig-bridge"),
            args: [
                { cache: false }
            ]
        }
    },
    'app': {
        create: {
            module: require("./lib/express-bridge"),
            args: [
                {
                    renderer: { $ref: "swig-bridge" },
                    viewsDir: global.ROOT_DIR + 'views',
                    staticDir: global.ROOT_DIR + 'public'
                }
            ]
        }
    },
    'routes': require("./routes"),
    'router': {
        create: {
            module: require('express-router')
        },
        ready: {
            setRoutes: [
                { $ref: 'routes' }
            ],
            setApp: [
                { $ref: 'app' }
            ],
            setLogger: [ console ]
        }
    },

    //Controllers
    'index-controller': {
        create: {
            module: require("./controllers/index")
        }
    },
    'destinations-controller': {
        create: {
            module: require("./controllers/destinations")
        }
    },

    'trackers-controller': {
        create: {
            module: require("./controllers/trackers")
        }
    }
};