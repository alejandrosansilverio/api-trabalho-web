'use strict';

    module.exports = function(app) {
        var TipoVinhoList = require('../controllers/tipoVinhosController');

        app
        .route("/tipo_vinhos")
        .get(TipoVinhoList.listAllTipoVinhos)
        .post(TipoVinhoList.createNewTipoVinho);

        app
        .route("/tipo_vinho/:id")
        .put(TipoVinhoList.updateTipoVinho)
        .delete(TipoVinhoList.deleteTipoVinho);
    };