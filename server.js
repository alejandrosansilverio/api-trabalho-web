'use strict'

const  express = require("express");
const  bodyParser = require("body-parser");
const cors = require("cors");

const  app = express();

// Solve CORS
app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json());



const  port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
res.send("Hello World");
});

app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}`);});

require("./config/db");

var routeUser = require('./api/routes/usuariosRoutes');
var routeVinhos = require('./api/routes/vinhosRoutes');
var routeUvas = require('./api/routes/uvasRoutes');
var routeTipoVinhos = require('./api/routes/tipoVinhosRoutes');
var routeHarmonizacoes = require('./api/routes/harmonizacoesRoutes');

routeUser(app);
routeVinhos(app);
routeUvas(app);
routeTipoVinhos(app);
routeHarmonizacoes(app);
