const  mongoose = require("mongoose");

mongoose.connect('mongodb+srv://annaluiza:unifei123@projetofinal.w1t8e.mongodb.net/ProjetoFinal?retryWrites=true&w=majority');

/*var  uri = "mongodb+srv://annaluiza:unifei123@projetofinal.w1t8e.mongodb.net/ProjetoFinal?retryWrites=true&w=majority"

const  options = {
useNewUrlParser:  true,
useUnifiedTopology:  true
};

mongoose.connect(uri, options).then(() => {
console.log("Database connection established!");
},
err  => {
{
console.log("Error connecting Database instance due to:", err);
}
});*/
