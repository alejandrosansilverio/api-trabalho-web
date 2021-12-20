'use strict';
    const TipoVinho = require("./tipoVinhos");
    const TipoUva = require("./uvas");
    const Harmonizacao = require("./harmonizacoes");
    const mongoose = require("mongoose");

    const Schema = mongoose.Schema;

    const VinhoSchema = new Schema({
        nome: {
            type:String,
            required:true
        },
        vinicola: {
            type:String,
            required:true
        },
        pais_origem: {
            type:String,
            required:true
        },
        rotulo: {
            type:String,
        },
        tipo_vinho: [
            {type:Schema.ObjectId, ref: 'TipoVinho'},
            {required:true}
        ],
        tipo_uva: [
            {type:Schema.ObjectId, ref: 'TipoUva'},
            {required:true}
        ],
        harmonizacao: [
            {type:Schema.ObjectId, ref: 'Harmonizacao'},
            {required:true}
        ],
        createdOn: {
            type:Date,
            default:Date.now
        }
    });

module.exports = mongoose.model("vinhos", VinhoSchema);