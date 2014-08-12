var DestinationsController = function () {
};

DestinationsController.prototype.topDestinations = function (request, response) {

    response.render("destinations.html", {
        request: request
    });
};

DestinationsController.prototype.destinationDomain = function (request, response) {
    response.render("destination.html", {

    });
};

module.exports = DestinationsController;