import mongoose, { Schema } from 'mongoose';
import { IFloor } from './floor';

export interface IBuilding extends Document {
  name: string;
  nickname: string;
  floors: IFloor[];
  status: string;
  type: string;
  address: string;
  city: string;
  country: string;
}

const floorSchema = new Schema<IFloor>({
  floor_number: { type: Number, required: true },
  floor_section: { type: String, required: true },
  nickname: { type: String, required: true },
  desks: { type: Number, required: true },
  meeting_rooms: { type: Number, required: true },
});

const BuildingSchema = new Schema<IBuilding>({
  name: {type: String, required: true},
  nickname: {type: String, required: true},
  floors: [floorSchema],
  status: {type: String, required: true},
  type: {type: String, required: true},
  address: {type: String, required: true},
  city: {type: String, required: true},
  country: {type: String, required: true},
});

const Building = mongoose.model('Building', BuildingSchema);

export default Building;
