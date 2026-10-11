import { Pool } from 'pg'

export const conn = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: process.env.DB_PASSWORD,
    database: 'Wunderlist',
    port: 5432
})