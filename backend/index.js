const express = require("express");
const app = express();

<<<<<<< HEAD
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("MVP -backend funcionando");
});

=======
// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor backend MVP operativo");
});

// Iniciar servidor
const PORT = 3000;
>>>>>>> a9a77ee (Recrear index.js para backend Express)
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
