import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connSring = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connSring,
});
try {
  const dropTable = [
    'DROP TABLE IF EXISTS users CASCADE',
    'DROP TABLE IF EXISTS session CASCADE',
    'DROP TABLE IF EXISTS review',
  ];
  const dropTables = async () => {
    for(const table of dropTable) {
      await pool.query(table);
    }
  }
  dropTables();

} catch (error) {
  console.log(error.message);
}
