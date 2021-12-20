'use strict';

    const mongoose = require("mongoose");

    const Schema = mongoose.Schema;

    const TipoVinhoSchema = new Schema({
        nome: {
            type:String,
            required:true
        },
        id: {
            type:Number,
            required:true
        },
        createdOn: {
            type:Date,
            default:Date.now
        }
    });

module.exports = mongoose.model("tipo_vinhos", TipoVinhoSchema);