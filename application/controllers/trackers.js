var TrackersController = function () {
};

TrackersController.prototype.topTrackers = function (request, response) {
    response.render("top-trackers.html", {
        request: request
    })
};

module.exports = TrackersController;