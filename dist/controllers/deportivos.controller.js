"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDeportivo = exports.updateDeportivo = exports.createDeportivo = exports.getDeportivobyId = exports.getDeportivos = void 0;
const db_1 = require("../utils/db");
const queries_1 = __importDefault(require("../utils/queries"));
const getDeportivos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield db_1.conn.query(queries_1.default.GET_DEPORTIVOS);
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
});
exports.getDeportivos = getDeportivos;
const getDeportivobyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield db_1.conn.query(queries_1.default.GET_DEPORTIVO_BY_ID, [id]);
    return res.json(response.rows);
});
exports.getDeportivobyId = getDeportivobyId;
const createDeportivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { marca, color, cantidad, precio } = req.body;
    const response = yield db_1.conn.query(queries_1.default.INSERT_DEPORTIVO, [marca, color, cantidad, precio]);
    console.log(marca, color, cantidad, precio);
    return res.json({
        message: 'Zapato Deportivo creado',
        body: {
            bota: {
                marca,
                color,
                cantidad,
                precio
            }
        }
    });
});
exports.createDeportivo = createDeportivo;
const updateDeportivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { marca, color, cantidad, precio } = req.body;
    const response = yield db_1.conn.query(queries_1.default.UPDATE_DEPORTIVO, [marca, color, cantidad, precio, id]);
    return res.json(`Zapato Deportivo ${id} actualizado satisfactoriamente`);
});
exports.updateDeportivo = updateDeportivo;
const deleteDeportivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield db_1.conn.query(queries_1.default.DELETE_DEPORTIVO, [id]);
    return res.json(`Zapato Deportivo ${id} eliminado satisfactoriamente`);
});
exports.deleteDeportivo = deleteDeportivo;
