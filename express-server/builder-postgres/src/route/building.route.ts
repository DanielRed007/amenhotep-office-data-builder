import express from 'express';
import { getBuildings } from '../controller/building.controller';

const router = express.Router();

router.get('/', getBuildings);

export default router;