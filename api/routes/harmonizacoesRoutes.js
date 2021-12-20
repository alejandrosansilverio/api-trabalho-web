'use strict';

    module.exports = function(app) {
        var HarmonizacoesList = require('../controllers/harmonizacoesController');

        app
        .route("/harmonizacoes")
        .get(HarmonizacoesList.listAllHarmonizacoes)
        .post(HarmonizacoesList.createNewHarmonizacoes);

        app
        .route("/harmonizacao/:id")
        .put(HarmonizacoesList.updateHarmonizacoes)
        .delete(HarmonizacoesList.deleteHarmonizacoes);
    };