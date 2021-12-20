const Harmonizacoes = require("../models/harmonizacoes");

exports.listAllHarmonizacoes = (req, res) => {
Harmonizacoes.find({}, (err, harmonizacoes) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(harmonizacoes);
});
};


exports.createNewHarmonizacoes = (req, res) => {
let  newHarmonizacoes = new Harmonizacoes (req.body);
newHarmonizacoes.save((err, harmonizacoes) => {
if (err) {
res.status(500).send(err);
}
res.status(201).json({ message: "Harmonização cadastrada com sucesso!" });
});
};


exports.updateHarmonizacoes = (req, res) => {
Harmonizacoes.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, harmonizacoes) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(harmonizacoes);
});
};


exports.deleteHarmonizacoes = async ( req, res) => {
await Harmonizacoes.deleteOne({ _id:req.params.id }, (err) => {
if (err) {
return res.status(404).send({ message: "Algo deu errado. Tente novamente." });
}
res.status(200).json({ message:"Harmonização deletada com sucesso!"});
});
};