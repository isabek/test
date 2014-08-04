var port = process.env.PORT || 8000;
var host = process.env.HOST || '0.0.0.0';

process.on('uncaughtException', function (err) {
    console.error(err, err);

    setTimeout(process.end, 1000)
});

function main(context) {

    if (module === require.main) {
        var app = context.app;

        app.listen(port, host, function () {
            console.log('Server listening on %s:%d', host, port);
        });
    }
}

require('./bootstrap').then(main, console.error);