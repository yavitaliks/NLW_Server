import express from "express";
import PointsController from "./Controllers/PointsController";
import ItensController from "./Controllers/ItensControler";

const routes = express.Router();
const pointController = new PointsController();
const itenscontroller = new ItensController();

routes.get("/itens", itenscontroller.index);

routes.post("/points", pointController.create);
routes.get("/points", pointController.index);
routes.get("/points/:id", pointController.show);

export default routes;
