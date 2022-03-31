import express from "express";

const app = express();

app.get("/teste", (request, response) => {
  return response.send("Chegou aqui!");
});

app.listen(3000, () => console.log("Servidor rodando..."));
