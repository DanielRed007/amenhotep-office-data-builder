import Building from "../models/building.model";
import { Op } from "sequelize";

interface IBuildingRepository {
  save(building: Building): Promise<Building>;
  retrieveAll(searchParams?: {title: string, published: boolean}): Promise<Building[]>;
  retrieveById(id: string): Promise<Building | null>;
  update(id: string, updatedBuilding: any): Promise<Building | null>;
  delete(id: string): any;
  deleteAll(): Promise<number>;
}

class BuildingRepository implements IBuildingRepository {
    async save(building: Building): Promise<Building> {
        try {
          return await Building.create({
            id: building.id,
            name: building.name,
            nickname: building.nickname,
            floors: building.floors,
            status: building.status,
            type: building.type,
            address: building.address,
            city: building.city,
            country: building.country,
          });
        } catch (err) {
          throw new Error("Failed to create Building!");
        }
    }

    async retrieveAll(searchParams?: {title?: string, published?: boolean}): Promise<Building[]> {
        try {
          let condition: any = {};
      
          if (searchParams?.published) condition.published = true;
      
          if (searchParams?.title)
            condition.title = { [Op.like]: `%${searchParams.title}%` };

          return await Building.findAll();
        } catch (error) {
          throw error;
        }
    }

    async retrieveById(buildingId: string): Promise<Building | null> {
        try {
          return await Building.findOne({ where: { id: String(buildingId) } });
        } catch (error) {
          console.log(error);
          throw error;
        }
    }

    async update(id: string, building: any): Promise<any> {

        try {
          const affectedRows = await Building.update(
            { ...building },
            { where: { id: id } }
          );
      
          return affectedRows;
        } catch (error) {
          throw new Error("Failed to update Building!");
        }
    }

    async delete(id: string) {
        try {
          const affectedRows = await Building.destroy({ where: { id: id } });
      
          return affectedRows;
        } catch (error) {
          throw new Error("Failed to delete Building!");
        }
    }

    async deleteAll(): Promise<number> {
        try {
          return Building.destroy({
            where: {},
            truncate: false
          });
        } catch (error) {
          throw new Error("Failed to delete Buildings!");
        }
    }
}

export default new BuildingRepository();