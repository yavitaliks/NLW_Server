import express, { request, response } from "express";

const app = express();

app.get("/users", (request, response) => {
  response.json(["Vitaliy", "Samia", "Betto", "Daniel"]);
});
app.listen(3333);
