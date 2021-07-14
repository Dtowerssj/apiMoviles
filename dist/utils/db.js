"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conn = void 0;
const pg_1 = require("pg");
exports.conn = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    password: '17camarones',
    database: 'Wunderlist',
    port: 5432
});
