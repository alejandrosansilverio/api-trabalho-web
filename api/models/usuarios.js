'use strict';

    const mongoose = require("mongoose");

    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        nome: {
            type:String,
            required:true
        },
        email: {
            type:String,
            required:true
        },
        senha: {
            type:String,
            required:true
        },
        createdOn: {
            type:Date,
            default:Date.now
        }
    });

module.exports = mongoose.model("usuarios", UserSchema);