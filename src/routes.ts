import express, { request, response } from "express";
import knex from "./Database/Conection";

const routes = express.Router();

routes.get("/itens", async (request, response) => {
  const itens = await knex("itens").select("*");

  const serializedItems = itens.map((item) => {
    return {
      titulo: item.titulo,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  });

  return response.json(serializedItems);
});

export default routes;
