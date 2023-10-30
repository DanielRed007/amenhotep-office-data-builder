import express, { Request, Response } from 'express';
import { Pool } from 'pg';
import { QueryResult } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

app.get('/', async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result: QueryResult = await client.query('SELECT * FROM your_table');
    res.json(result.rows);
    client.release();
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
