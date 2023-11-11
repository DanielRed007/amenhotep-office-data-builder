import { Request, Response } from "express";
import Floor from "../models/floor.model";
import floorRepository from "../repositories/floor.repository";
import buildingRepository from "../repositories/building.repository";

export default class BuildingController {
  async create(req: Request, res: Response) {
    try {
      const newFloor = await Floor.create(req.body);

      res.status(201).json({
        message: "create OK",
        reqBody: newFloor
      });
    } catch (err) {
      res.status(500).json({
        message: err
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const floor = await floorRepository.retrieveAll();
      
      res.status(200).json({floor});
    } catch (err) {
      res.status(500).json({
        message: err
      });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const floor = await floorRepository.retrieveById(id);

      if(!floor){
        return res.status(404).json({message: "Floor not Found"});
      } else {
        res.status(200).json({floor});
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
      const updatedFloor = req.body;

      const floor = await floorRepository.retrieveById(id);

      if(!floor){
        throw Error("Floor Not Found");
      }

      await floorRepository.update(id,updatedFloor);

      res.status(200).json({
        updated: updatedFloor,
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async updateFloorByBuildingId(req: Request, res: Response){
    const floorId = req.params.floorId;
    const buildingId = req.params.buildingId;
    const updatedFloor = req.body;

    const building = await buildingRepository.retrieveById(buildingId);

    if(!building){
      return res.status(404).json({message: "Building not Found"});
    }

    await floorRepository.update(floorId, updatedFloor);

    res.status(200).json({
      updated: updatedFloor,
    });
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;

      await floorRepository.delete(id);

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