const Vinho = require("../models/vinhos");
const TipoVinho = require("../models/tipoVinhos");
const TipoUvas = require("../models/uvas");
const TipoHarmonizacoes = require("../models/harmonizacoes");

exports.listAllVinhos = (req, res) => {
Vinho.find({}, (err, vinho) => {
if (err) {
res.status(500).send({ message: "Algo deu errado. Tente novamente." });
}
res.status(200).json(vinho);
});
};


exports.createNewVinho = async (req, res) => {
// req.body['rotulo'] = req.file.filename;
let tipoVinhos = await TipoVinho.find({ id: { $in: req.body.tipo_vinho } });
let tipoUvas = await TipoUvas.find({ id: { $in: req.body.tipo_uva } });
let tipoHarmonizacoes = await TipoHarmonizacoes.find({ id: { $in: req.body.harmonizacao } });

req.body['tipo_vinho'] = tipoVinhos;
req.body['tipo_uva'] = tipoUvas;
req.body['harmonizacao'] = tipoHarmonizacoes;
let  newVinho = new Vinho (req.body);
newVinho.save((err, vinho) => {
if (err) {
res.status(500).send(err);
return;
}
res.status(201).json({ message: "Vinho cadastrado com sucesso!" });
return;
});
};


exports.updateVinho = async (req, res) => {
req.body['rotulo'] = req.file.filename;
let tipoVinhos = await TipoVinho.find({ id: { $in: req.body.tipo_vinho } });
let tipoUvas = await TipoUvas.find({ id: { $in: req.body.tipo_uva } });
let tipoHarmonizacoes = await TipoHarmonizacoes.find({ id: { $in: req.body.harmonizacao } });

req.body['tipo_vinho'] = tipoVinhos;
req.body['tipo_uva'] = tipoUvas;
req.body['harmonizacao'] = tipoHarmonizacoes;
Vinho.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, vinho) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json({ message: "Vinho editado com sucesso!" });
});
};


exports.deleteVinho = async (req, res) => {
    const id = req.params.id;
    const vinho = await Vinho.findOne({ _id: id });

    if (!vinho) {
      res.status(404).json({ message: "Vinho não encontrado!" });
      return;
    }

    await Vinho.findByIdAndRemove(id);

    res.status(200).json({ message: "Vinho removido com sucesso!" });
}