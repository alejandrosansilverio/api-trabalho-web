const Uva = require("../models/uvas");

exports.listAllUvas = (req, res) => {
Uva.find({}, (err, uva) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(uva);
});
};


exports.createNewUva = (req, res) => {
let  newUva = new Uva (req.body);
newUva.save((err, uva) => {
if (err) {
res.status(500).send(err);
}
res.status(201).json(uva);
});
};


exports.updateUva = (req, res) => {
Uva.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, uva) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(uva);
});
};


exports.deleteUva = async ( req, res) => {
await  Uva.deleteOne({ _id:req.params.id }, (err) => {
if (err) {
return res.status(404).send(err);
}
res.status(200).json({ message:"Todo successfully deleted"});
});
};