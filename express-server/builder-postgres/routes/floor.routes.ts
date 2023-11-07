import { Router } from "express";
import FloorController from "../controllers/floor.controller";

class FloorRoutes {
  router: Router = Router();
  controller = new FloorController();

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

export default new FloorRoutes().router;