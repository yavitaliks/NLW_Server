import { Request, Response } from "express";
import knex from "../Database/Conection";

class PointsController {
  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      lattitude,
      longitude,
      city,
      uf,
      itens,
    } = request.body;

    const point = {
      name,
      email,
      whatsapp,
      lattitude,
      longitude,
      city,
      uf,
      image: "imagefake",
    };
    try {
      const trx = await knex.transaction();

      const insertIds = await trx("points").insert(point);
      const id_ponto = insertIds[0];

      const pointItens = itens.map((id_item: number) => {
        return {
          id_item,
          id_ponto,
        };
      });
      await trx("ponto_item").insert(pointItens);
      return response.json({
        id: id_ponto,
        ...point,
      });
    } catch (erro) {
      return response.json(erro);
    }
  }
}
export default PointsController;
