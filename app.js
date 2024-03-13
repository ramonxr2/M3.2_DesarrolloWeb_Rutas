const cors = require("cors");
const express = require("express");
const activoController = require("./controladores/activoController");
const responsableController = require("./controladores/responsableController");
const ubicacionController = require("./controladores/ubicacionController");
const app = express();

app.use(cors());
app.use(express.json());

// activos
app.get("/activos", activoController.getAll);
app.get("/activos/:id", activoController.getById);
app.post("/activos", activoController.create);
app.put("/activos/:id", activoController.update);
app.delete("/activos/:id", activoController.delete);

// responsables
app.get("/responsables", responsableController.getAll);
app.get("/responsables/:id", responsableController.getById);
app.post("/responsables", responsableController.create);
app.put("/responsables/:id", responsableController.update);
app.delete("/responsables/:id", responsableController.delete);

//ubicaciones
app.get("/ubicaciones", ubicacionController.getAll);
app.get("/ubicaciones/:id", ubicacionController.getById);
app.post("/ubicaciones", ubicacionController.create);
app.put("/ubicaciones/:id", ubicacionController.update);
app.delete("/ubicaciones/:id", ubicacionController.delete);

app.listen(3000, () => {
    console.log("Server en el puerto 3000");
});
