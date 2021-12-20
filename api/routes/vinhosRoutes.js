'use strict';

        const { imageUpload } = require("../helpers/image-upload");
        module.exports = function(app) {
        var vinhoList = require('../controllers/vinhosController');

        var type = imageUpload.single('rotulo');
        app
        .route("/vinhos")
        .get(vinhoList.listAllVinhos)
        .post(type, vinhoList.createNewVinho);

        app
        .route("/vinho/:id")
        .put(vinhoList.updateVinho)
        .delete(vinhoList.deleteVinho);
        };