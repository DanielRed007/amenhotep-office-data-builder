import { Request, Response } from "express";
import Floor from "../models/floor.model";
import floorRepository from "../repositories/floor.repository";

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
      const buildings = await floorRepository.retrieveAll();
      
      res.status(200).json({
        message: "findAll OK",
        ...buildings
      });
    } catch (err) {
      res.status(500).json({
        message: err
      });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const id = req.params.id;
      console.log({id});

      const building = await floorRepository.retrieveById(id);

      console.log({id,building});

      if(!building){
        res.status(404).json({
          message: "Building not Found",
        });
      }

      res.status(200).json({
        message: "findOne OK",
        building: building
      });
    } catch (err) {
      res.status(500).json({
        message: err
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      res.status(200).json({
        message: "update OK",
        reqParamId: req.params.id,
        reqBody: req.body
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
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