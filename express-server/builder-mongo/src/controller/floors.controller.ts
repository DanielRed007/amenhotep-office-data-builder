import { Request, Response } from 'express';
import Floor from '../model/floor';

export const createNewFloor = async (req: Request, res: Response) => {
  try {
    const floorData = req.body;

    const newFloor = new Floor(floorData);

    const savedFloor = await newFloor.save();
    res.status(201).json(savedFloor);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getFloors = async (req: Request, res: Response) => {
  try {
    const floors = await Floor.find();
    res.json(floors);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export const getFloorById = async (req: Request, res: Response) => {
  try {
    const floor = await Floor.findById(req.params.id);
    if (!floor) {
      return res.status(404).json({ error: 'Floor not found' });
    }
    res.json(floor);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export const editFloor = async (req: Request, res: Response) => {
  try {
    const updatedFloor = await Floor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedFloor) {
      return res.status(404).json({ error: 'Floor not found' });
    }
    res.json(updatedFloor);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export const deleteFloor = async (req: Request, res: Response) => {
  try {
    const deletedFloor = await Floor.findByIdAndRemove(req.params.id);
    if (!deletedFloor) {
      return res.status(404).json({ error: 'Floor not found' });
    }
    res.json(deletedFloor);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};