module.exports = {
    'swig-bridge': {
        create: {
            module: require('./lib/swig-bridge'),
            args: [
                { cache: false }
            ]
        }
    },
    'app': {
        create: {
            module: require('./lib/express-bridge'),
            args: [
                {
                    renderer: { $ref: "swig-bridge" },
                    viewsDir: global.ROOT_DIR + 'views',
                    staticDir: global.ROOT_DIR + 'public'
                }
            ]
        }
    }
};