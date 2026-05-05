import express from "express";
import clientsRouter from "./Router/clients.js"

const app = express();

app.use(clientsRouter)

app.listen(3000, () => {
  console.log("servidor criado...");
});