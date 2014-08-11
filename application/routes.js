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
    }
};