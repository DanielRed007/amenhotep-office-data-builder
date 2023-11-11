import { Request, Response } from "express";
import Building from "../models/building.model";
import buildingRepository from "../repositories/building.repository";

export default class BuildingController {
  async create(req: Request, res: Response) {
    try {
      const newBuilding = await Building.create(req.body);

      res.status(201).json({
        message: "create OK",
        reqBody: newBuilding
      });
    } catch (err) {
      res.status(500).json({
        message: err
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const buildings = await buildingRepository.retrieveAll();
      
      res.status(200).json({buildings});
    } catch (err) {
      res.status(500).json({
        message: err
      });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const building = await buildingRepository.retrieveById(id);

      if(!building){
        return res.status(404).json({error: "building not found"});
      } else {
        res.status(200).json({building});
      }
    } catch (err) {
      res.status(500).json({
        message: err
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const updatedBuilding = req.body;

      const building = await buildingRepository.retrieveById(id);

      if(!building){
        throw Error("Building Not Found");
      }

      await buildingRepository.update(id,updatedBuilding);

      res.status(200).json({
        updated: updatedBuilding,
      });
    } catch (err) {
      res.status(500).json({
        message: err
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;

      await buildingRepository.delete(id);

      res.status(200).json({
        message: "delete OK",
        reqParamId: req.params.id
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }
}