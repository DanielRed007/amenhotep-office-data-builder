import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
import Floor from './floor.model';

@Table({
  tableName: 'buildings',
  timestamps: false,
})
export default class Building extends Model {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    field: 'id',
  })
  id?: string;

  @Column({
    type: DataType.STRING(255),
    field: 'name',
  })
  name?: string;

  @Column({
    type: DataType.STRING(255),
    field: 'nickname',
  })
  nickname?: string;

  @HasMany(() => Floor)
  floors?: Floor[];

  @Column({
    type: DataType.STRING,
    field: 'status',
  })
  status?: string;

  @Column({
    type: DataType.STRING,
    field: 'type',
  })
  type?: string;

  @Column({
    type: DataType.STRING(255),
    field: 'address',
  })
  address?: string;

  @Column({
    type: DataType.STRING,
    field: 'city',
  })
  city?: string;

  @Column({
    type: DataType.STRING,
    field: 'country',
  })
  country?: string;
}
