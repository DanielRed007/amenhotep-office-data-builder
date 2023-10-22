import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IBuilding {
  id: string;
  name: string;
  nickname: string;
  floors: string[];
  status: string;
  type: string;
  address: string;
  city: string;
  country: string;
}

const BuildingSchema = new Schema<IBuilding>({
  id: String,
  name: String,
  nickname: String,
  floors: [String],
  status: String,
  type: String,
  address: String,
  city: String,
  country: String,
});

const Building = mongoose.model('Building', BuildingSchema);

export default Building;
