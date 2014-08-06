var IndexController = function () {
};

IndexController.prototype.index = function (request, response) {

    response.render("index.html", {
        request: request
    });
};


module.exports = IndexController;