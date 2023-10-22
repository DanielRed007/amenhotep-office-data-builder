import express from 'express';
import { createNewBuilding, getBuildingById, getBuildings, editBuilding, deleteBuilding } from '../controller/building.controller';

const router = express.Router();

router.post('/', createNewBuilding);
router.get('/', getBuildings);
router.get('/:id', getBuildingById);
router.put('/:id', editBuilding);
router.delete('/:id', deleteBuilding);

export default router;
