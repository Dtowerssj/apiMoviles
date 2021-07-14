import { Pool } from 'pg'

export const conn = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '17camarones',
    database: 'Wunderlist',
    port: 5432
})