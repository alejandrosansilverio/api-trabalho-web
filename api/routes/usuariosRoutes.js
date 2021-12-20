'use strict';

    module.exports = function(app) {
        var userList = require('../controllers/usuariosController');

        app
        .route("/users")
        .get(userList.listAllUsers)
        .post(userList.createNewUser);

        app
        .route("/user/:id")
        .put(userList.updateUser)
        .delete(userList.deleteUser);
    };