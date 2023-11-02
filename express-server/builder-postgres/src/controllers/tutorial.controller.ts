import { Request, Response } from "express";
import tutorial from "../models/tutorial.model";
import tutorialRepository from "../repositories/tutorial.repository";

export default class TutorialController{
    async create(req: Request, res: Response){
        try {
            const newTutorial = await tutorialRepository.save(req.body);

            res.json(newTutorial);
        } catch (error) {
            res.json(error);
        }
    }

    async findAll(req: Request, res: Response){}

    async findOne(req: Request, res: Response){}

    async update(req: Request, res: Response){}

    async delete(req: Request, res: Response){}

    async deleteAll(req: Request, res: Response){}

    async findAllPublished(req: Request, res: Response){}
}