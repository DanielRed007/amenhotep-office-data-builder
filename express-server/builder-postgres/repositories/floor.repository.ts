import Floor from "../models/floor.model";
import { Op } from "sequelize";

interface IFloorRepository {
  save(floor: Floor): Promise<Floor>;
  retrieveAll(searchParams?: {title: string, published: boolean}): Promise<Floor[]>;
  retrieveById(floorId: string): any;
  update(id: string, floor: any): Promise<Floor | null>;
  delete(id: string): any;
  delete(floorId: string): Promise<number>;
  deleteAll(): Promise<number>;
}

class FloorRepository implements IFloorRepository {
    async save(floor: Floor): Promise<Floor> {
        try {
          return await Floor.create({
            id: floor.id,
            building_id: floor.building_id,
            floor_number: floor.floor_number, 
            floor_section: floor.floor_section, 
            nickname: floor.nickname,
            desks: floor.desks,
            meeting_rooms: floor.meeting_rooms,
          });
        } catch (err) {
          throw new Error("Failed to create Floor!");
        }
    }

    async retrieveAll(searchParams?: {title?: string, published?: boolean}): Promise<any> {
        try {
          let condition: any = {};
      
          if (searchParams?.published) condition.published = true;
      
          if (searchParams?.title)
            condition.title = { [Op.like]: `%${searchParams.title}%` };

          return await Floor.findAll();
        } catch (error) {
          return error;
        }
    }

    async retrieveById(floorId: string) {
        try {
          return await Floor.findOne({ where: { id: String(floorId) } });
        } catch (error) {
          console.log(error);
          throw new Error("Failed to retrieve Floor!");
        }
    }

    async update(id: string, floor: any): Promise<any> {
      
        try {
          const affectedRows = await Floor.update(
            { ...floor },
            { where: { id: id } }
          );
      
          return affectedRows;
        } catch (error) {
          throw new Error("Failed to update Floor!");
        }
    }

    async delete(id: string): Promise<number> {
        try {
          const affectedRows = await Floor.destroy({ where: { id: id } });
      
          return affectedRows;
        } catch (error) {
          throw new Error("Failed to delete Floor!");
        }
    }

    async deleteAll(): Promise<number> {
        try {
          return Floor.destroy({
            where: {},
            truncate: false
          });
        } catch (error) {
          throw new Error("Failed to delete Floors!");
        }
    }
}

export default new FloorRepository();