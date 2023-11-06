import { Application } from "express";
import homeRoutes from "./home.routes";
import tutorialRoutes from "./tutorials.routes";
import buildingRoutes from "./building.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api", homeRoutes);
    app.use("/api/tutorials", tutorialRoutes);
    app.use("/api/buildings", buildingRoutes);     
  }
}