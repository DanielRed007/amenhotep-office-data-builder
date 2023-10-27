import express from 'express';
import { createNewFloor, deleteFloor, editFloor, getFloorById, getFloors, getFloorsByBuildingId } from '../controller/floors.controller';


const router = express.Router();

router.post('/:buildingId', createNewFloor);
router.get('/', getFloors);
router.get('/:id', getFloorById);
router.get('/building/:buildingId', getFloorsByBuildingId);
router.put('/:id', editFloor);
router.delete('/:id', deleteFloor);

export default router;
