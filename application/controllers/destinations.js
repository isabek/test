var DestinationsController = function () {
};

DestinationsController.prototype.topDestinations = function (request, response) {

    response.render("destinations.html", {
        request: request
    });
};

module.exports = DestinationsController;