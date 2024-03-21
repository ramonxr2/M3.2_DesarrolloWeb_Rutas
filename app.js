const express = require('express');
const app = express();

// Importar los routers de cada recurso
const activoRouter = require('./routes/activo');
const responsableRouter = require('./routes/responsable');
const ubicacionRouter = require('./routes/ubicacion');

// Configurar la aplicación para usar los routers de cada recurso
app.use('/activos', activoRouter);
app.use('/responsables', responsableRouter);
app.use('/ubicaciones', ubicacionRouter);

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
