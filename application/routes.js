module.exports = {
    'homepage': {
        httpMethod: 'get',
        path: '/',
        controller: 'index-controller',
        method: 'index'
    },
    'destinations': {
        httpMethod: 'get',
        path: '/destinations',
        controller: 'destinations-controller',
        method: 'topDestinations'
    },

    'destination-domain': {
        httpMethod: 'get',
        path: '/destinations/:destination',
        controller: 'destinations-controller',
        method: 'destinationDomain'
    },

    'trackers': {
        httpMethod: 'get',
        path: '/trackers',
        controller: 'trackers-controller',
        method: 'topTrackers'
    }
};