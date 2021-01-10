import { createPool } from 'mysql2/promise';
require('dotenv').config()
export default async function connect():Promise<any> {
const connection = await createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 5,
});
console.log(process.env.DB_HOST)
return connection;
}