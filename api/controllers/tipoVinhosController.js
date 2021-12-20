const TipoVinho = require("../models/tipoVinhos");

exports.listAllTipoVinhos = (req, res) => {
TipoVinho.find({}, (err, tipovinho) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(tipovinho);
});
};


exports.createNewTipoVinho = (req, res) => {
let  newTipoVinho = new TipoVinho (req.body);
newTipoVinho.save((err, tipovinho) => {
if (err) {
res.status(500).send(err);
}
res.status(201).json(tipovinho);
});
};


exports.updateTipoVinho = (req, res) => {
TipoVinho.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, tipovinho) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(tipovinho);
});
};


exports.deleteTipoVinho = async ( req, res) => {
await  TipoVinho.deleteOne({ _id:req.params.id }, (err) => {
if (err) {
return res.status(404).send(err);
}
res.status(200).json({ message:"Todo successfully deleted"});
});
};