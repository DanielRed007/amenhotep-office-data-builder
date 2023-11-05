import { Request, Response } from "express";
import Tutorial from "../models/tutorials.model";
import tutorialRepository from "../repositories/tutorials.repository";

export default class TutorialController {
  async create(req: Request, res: Response) {
    try {
      const newTutorial = await Tutorial.create(req.body);
      // return newTutorial;

      res.status(201).json({
        message: "create OK",
        reqBody: newTutorial
      });
    } catch (err) {
      res.status(500).json({
        message: err
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const tutorials = await tutorialRepository.retrieveAll();

      res.status(200).json({
        message: "findAll OK",
        ...tutorials
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

      const tutorial = await tutorialRepository.retrieveById(parseInt(id));

      if(!tutorial){
        res.status(404).json({
          message: "Tutorial not Found",
        });
      }

      res.status(200).json({
        message: "findOne OK",
        tutorial: tutorial
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
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