import express from 'express';
import mongoose from 'mongoose';
import BuildingRoutes from "./route/building.route";

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/buildings';

app.use(express.json());
app.use("/api/buildings", BuildingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  mongoose.connect(MONGO_URI);
  console.log('Connected to MongoDB');
});
