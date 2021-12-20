const User = require("../models/usuarios");

exports.listAllUsers = (req, res) => {
User.find({}, (err, user) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(user);
});
};


exports.createNewUser = (req, res) => {
let  newUser = new User (req.body);
newUser.save((err, user) => {
if (err) {
res.status(500).send(err);
}
res.status(201).json(user);
});
};


exports.updateUser = (req, res) => {
User.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, user) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(user);
});
};


exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });

    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado!" });
      return;
    }

    await User.findByIdAndRemove(id);

    res.status(200).json({ message: "Usuário removido com sucesso!" });
}