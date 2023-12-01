import { Sequelize } from "sequelize-typescript";
import { config, dialect } from "../../config/db.config";
import Building from "../../models/building.model";

describe("Postgres DB Connection", () => {

    it("Should establish sucessfulconnection to DB", async () => {

        const pool = new Sequelize({
            database: config.DB,
            username: config.USER,
            password: config.PASSWORD,
            host: config.HOST,
            dialect: dialect,
            pool: {
              max: config.pool.max,
              min: config.pool.min,
              acquire: config.pool.acquire,
              idle: config.pool.idle
            },
            models: [Building]
        });

        expect(pool).toBeTruthy();
        pool.close();
    });

});