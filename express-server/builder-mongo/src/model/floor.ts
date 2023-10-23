import mongoose, { Schema } from 'mongoose';

export interface IFloor {
  _id?: string;
  building_id: mongoose.Schema.Types.ObjectId | null;
  floor_number: number;
  floor_section: string;
  nickname: string;
  desks: number;
  meeting_rooms: number;
}

const FloorSchema = new Schema<IFloor>({
  building_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Building'},
  floor_number: { type: Number, required: true },
  floor_section: { type: String, required: true },
  nickname: { type: String, required: true },
  desks: { type: Number, required: true },
  meeting_rooms: { type: Number, required: true },
});

const Floor = mongoose.model('Floor', FloorSchema);

export default Floor;