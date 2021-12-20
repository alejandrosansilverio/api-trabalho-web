'use strict';

    module.exports = function(app) {
        var uvaList = require('../controllers/uvasController');

        app
        .route("/uvas")
        .get(uvaList.listAllUvas)
        .post(uvaList.createNewUva);

        app
        .route("/uva/:id")
        .put(uvaList.updateUva)
        .delete(uvaList.deleteUva);
    };