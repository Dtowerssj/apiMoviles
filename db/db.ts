import { Pool } from 'pg'

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '17camarones',
    database: 'TiendaCalzado',
    port: 5432
})