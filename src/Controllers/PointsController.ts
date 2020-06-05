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

      await trx.commit();

      return response.json({
        id: id_ponto,
        ...point,
      });
    } catch (erro) {
      return response.json(erro);
    }
  }

  async index(request: Request, response: Response) {
    const { city, uf, itens } = request.query;
    const parcedItens = String(itens)
      .split(",")
      .map((item) => Number(item.trim()));
    console.log(parcedItens);
    const points = await knex("points")
      .join("ponto_item", "points.id", "=", "ponto_item.id_ponto")
      .whereIn("ponto_item.id_item", parcedItens)
      .where("city", String(city))
      .where("uf", String(uf))
      .distinct()
      .select("points.*");
    console.log(points);
    return response.json(points);
  }

  async show(request: Request, response: Response) {
    const id = request.params.id;
    try {
      const point = await knex("points").where("id", id).first();
      if (!point) {
        return response
          .status(400)
          .json({ message: "Ponto de coleta nao existe" });
      }

      const itens = await knex("itens")
        .join("ponto_item", "itens.id", "=", "ponto_item.id_item")
        .where("ponto_item.id_ponto", id)
        .select("itens.titulo");
      return response.json({ point, itens });
    } catch (erro) {
      console.log(erro);
    }
  }
}
export default PointsController;
