import express from "express";
import clientsRouter from "./Router/clients.js";
import db from "./db.js";
import clientModel from "./Model/clientModel.js"; 

import usersRouter from "./Router/users.js"

const app = express();

app.use(express.urlencoded({extended:true}))

app.use('/clients', clientsRouter);
app.use(usersRouter);
app.set('view engine','pug');
app.set('views', './Views');

db.sync().then(() => {
  console.log("conectado com o banco:" + process.env.DB_NAME);
}).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("servidor criado...");
  });
});