import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb://localhost:27017/buildings'; // Update with your MongoDB URI

const BuildingSchema = new mongoose.Schema({
  id: String,
  name: String,
  nickname: String,
  floors: [String],
  status: String,
  type: String,
});

const Building = mongoose.model('Building', BuildingSchema);

app.use(express.json());

app.get('/api/buildings', async (req, res) => {
  try {
    const buildings = await Building.find();
    res.json(buildings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch buildings' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  mongoose.connect(MONGO_URI);
  mongoose.connection.on('error', console.error);
  mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
  });
});
