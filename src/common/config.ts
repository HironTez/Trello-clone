import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.join(__dirname, '../../.env')
});

const PORT = process.env['PORT'] || 4000;
const JWT_SECRET_KEY = process.env['JWT_SECRET_KEY'];
const POSTGRE_HOST = process.env['POSTGRES_HOST'];
const POSTGRE_PORT = Number(process.env['POSTGRES_PORT']);
const POSTGRE_USER = process.env['POSTGRES_USER'];
const POSTGRE_PASSWORD = process.env['POSTGRES_PASSWORD'];
const POSTGRE_DATABASE = process.env['POSTGRES_DB'];

export { PORT, JWT_SECRET_KEY, POSTGRE_HOST, POSTGRE_PORT, POSTGRE_USER, POSTGRE_PASSWORD, POSTGRE_DATABASE };