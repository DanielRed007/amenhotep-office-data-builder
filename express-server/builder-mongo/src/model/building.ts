import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IBuilding {
  _id?: string;
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
  name: {type: String, required: true},
  nickname: {type: String, required: true},
  floors: [String],
  status: {type: String, required: true},
  type: {type: String, required: true},
  address: {type: String, required: true},
  city: {type: String, required: true},
  country: {type: String, required: true},
});

const Building = mongoose.model('Building', BuildingSchema);

export default Building;
