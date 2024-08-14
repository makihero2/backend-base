import express from "express";
import { configuration } from "./config.js";
import { operar, suma } from "./calculadora.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hola mundo al usuario ${configuration.username}`);
});

app.get("/operar", (req, res) => {
  
  const a = parseInt(req.query.a as string);
  const b = parseInt(req.query.b as string);
  
  const oper = req.query.oper as string;

  const resultado = operar(oper, a, b);
  res.send(`el resultado de la operacion ${oper} de ${a} y ${b} es ${resultado}`);
});

export default app;