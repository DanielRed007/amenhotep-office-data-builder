import express, { Request, Response } from 'express';
import BuildingRoutes from "./route/building.route";
import { connectDB } from './db/config/connect';

const app = express();
app.use(express.json());


app.use("/api/buildings", BuildingRoutes);

app.get('/', async (req: Request, res: Response) => {
  connectDB();
});

app.listen(3000, () => {
  console.log('Server is running on port' + process.env.DB_PORT);
});
