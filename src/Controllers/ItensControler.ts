import { Request, Response } from "express";
import knex from "../Database/Conection";

class ItensControllers {
  async index(request: Request, response: Response) {
    const itens = await knex("itens").select("*");

    const serializedItems = itens.map((item) => {
      return {
        id: item.id,
        titulo: item.titulo,
        image_url: `http://localhost:3333/uploads/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }
}
export default ItensControllers;
