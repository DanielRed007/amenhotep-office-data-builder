import { Application } from "express";
import buildingRoutes from "./building.routes";
import floorsRoutes from "./floor.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/buildings", buildingRoutes);
    app.use("/api/floors", floorsRoutes);      
  }
}