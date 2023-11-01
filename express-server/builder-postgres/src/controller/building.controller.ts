import { Pool, QueryResult } from 'pg';
import { Request, Response } from 'express';

export interface IBuilding {
    id?: number;
    name: string;
    nickname: string;
    status: string;
    type: string;
    address: string;
    city: string;
    country: string;
}

export interface IFloor {
    id?: number;
    building_id: number;
    floor_number: number;
    floor_section: string;
    nickname: string;
    desks: number;
    meeting_rooms: number;
}

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
});
  
export const getBuildings =  async (req: Request, res: Response) => {
    try {
        const client = await pool.connect();
        const result: QueryResult = await client.query('SELECT * FROM buildings');

        res.json(result);
    } catch (error) {
        res.json(error);
    }
}; 