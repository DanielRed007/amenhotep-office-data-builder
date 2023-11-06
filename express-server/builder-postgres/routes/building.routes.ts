import { Router } from "express";
import BuildingController from "../controllers/building.controller";

class BuildingRoutes {
  router = Router();
  controller = new BuildingController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    this.router.post("/", this.controller.create);

    this.router.get("/", this.controller.findAll);

    this.router.get("/:id", this.controller.findOne);

    this.router.put("/:id", this.controller.update);

    this.router.delete("/:id", this.controller.delete);
  }
}

export default new BuildingRoutes().router;