import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "floors",
  timestamps: false,
})
export default class FloorDetails extends Model {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    field: "id"
  })
  id?: string;

  @Column({
    type: DataType.STRING,
    field: "building_id"
  })
  building_id?: string;

  @Column({
    type: DataType.INTEGER,
    field: "floor_number"
  })
  floor_number?: number;

  @Column({
    type: DataType.STRING,
    field: "floor_section"
  })
  floor_section?: string;

  @Column({
    type: DataType.STRING,
    field: "nickname"
  })
  nickname?: string;

  @Column({
    type: DataType.INTEGER,
    field: "desks"
  })
  desks?: number;

  @Column({
    type: DataType.INTEGER,
    field: "meeting_rooms"
  })
  meeting_rooms?: number;
}
