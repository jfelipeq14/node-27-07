const express = require("express");
const app = express();
const host = "localhost";
const port = 1414;

// agregar carpeta estatica con express
app.use(express.static("public"));

// Usar el metodo get para obtener la ruta
app.get("/", (req, res) => {
  res.end("Funciona");
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

// Init server
app.listen(port, host, () => {
  console.log(`server running in http://${host}:${port}`);
});
