const express = require("express");
const routes = express.Router();
const farmlandcontroller = require('../controller/farmlandcontrollerFeatures');
const plotsController = require('../controller/plotscontrollerFeatures');

const cors = require("cors")
let corsOptions = {
    origin: ["http://localhost:5000"]
}
//farmalandfeatures
routes.post('/postfarmlandfeatures', cors(corsOptions), farmlandcontroller.add);
routes.get('/getfarmlandfeatures', cors(corsOptions), farmlandcontroller.get);
// routes.get('/updatefarmlandfeatures/:id', cors(corsOptions), farmlandcontroller.updated);
// routes.get('/deletefarmlandfeatures/:id', cors(corsOptions), farmlandcontroller.deleted);

//plotsfeatures
routes.post('/postplots', cors(corsOptions), plotsController.add);
routes.get('/getplots', cors(corsOptions), plotsController.get);
// routes.get('/updateplots/:id', cors(corsOptions), plotsController.updated);
// routes.get('/deleteplots/:id', cors(corsOptions), plotsController.deleted);

module.exports = routes;
