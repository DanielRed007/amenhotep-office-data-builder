import { Request, Response } from 'express';
import Building from '../model/building';
import Floor from '../model/floor';

export const createNewBuilding = async (req: Request, res: Response) => {
  try {
    const buildingData = req.body;

    const newBuilding = new Building(buildingData);

    const floors = buildingData.floors;

    const newFloors = [];
    
    for (let floorData of floors) {
      const newFloor = new Floor({
        ...floorData,
        building_id: newBuilding._id,
      });

      await newFloor.save();
      newFloors.push(newFloor);
    }

    newBuilding.floors = newFloors;

    const savedBuilding = await newBuilding.save();
    res.status(201).json(savedBuilding);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getBuildings = async (req: Request, res: Response) => {
    try {
      const buildings = await Building.find();
      res.json(buildings);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
}

export const getBuildingById = async (req: Request, res: Response) => {
    try {
      const building = await Building.findById(req.params.id);
      if (!building) {
        return res.status(404).json({ error: 'Building not found' });
      }
      res.json(building);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
}

export const editBuilding = async (req: Request, res: Response) => {
    try {
      const updatedBuilding = await Building.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!updatedBuilding) {
        return res.status(404).json({ error: 'Building not found' });
      }
      res.json(updatedBuilding);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
}

export const deleteBuilding = async (req: Request, res: Response) => {
    try {
      const deletedBuilding = await Building.findByIdAndRemove(req.params.id);
      if (!deletedBuilding) {
        return res.status(404).json({ error: 'Building not found' });
      }
      res.json(deletedBuilding);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
}