import express from 'express';
import { createNewFloor, deleteFloor, editFloor, getFloorById, getFloors } from '../controller/floors.controller';


const router = express.Router();

router.post('/', createNewFloor);
router.get('/', getFloors);
router.get('/:id', getFloorById);
router.put('/:id', editFloor);
router.delete('/:id', deleteFloor);

export default router;
