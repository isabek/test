var TrackersController = function () {
};

TrackersController.prototype.topTrackersView = function (request, response) {
    response.render("top-trackers.html", {
        request: request
    })
};

TrackersController.prototype.trackerView = function (request, response) {
    response.render("tracker.html", {
        request: request
    });
};

module.exports = TrackersController;