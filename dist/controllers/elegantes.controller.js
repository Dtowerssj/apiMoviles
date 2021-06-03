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
exports.deleteElegante = exports.updateElegante = exports.createElegante = exports.getElegantebyId = exports.getElegantes = void 0;
const db_1 = require("../utils/db");
const queries_1 = __importDefault(require("../utils/queries"));
const getElegantes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield db_1.conn.query(queries_1.default.GET_ELEGANTES);
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
});
exports.getElegantes = getElegantes;
const getElegantebyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield db_1.conn.query(queries_1.default.GET_ELEGANTE_BY_ID, [id]);
    return res.json(response.rows);
});
exports.getElegantebyId = getElegantebyId;
const createElegante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tipo, color, marca, cantidad, precio } = req.body;
    const response = yield db_1.conn.query(queries_1.default.INSERT_ELEGANTE, [tipo, color, marca, cantidad, precio]);
    console.log(tipo, color, marca, cantidad, precio);
    return res.json({
        message: 'zapato Elegante creado',
        body: {
            elegante: {
                tipo,
                color,
                marca,
                cantidad,
                precio
            }
        }
    });
});
exports.createElegante = createElegante;
const updateElegante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { tipo, color, marca, cantidad, precio } = req.body;
    const response = yield db_1.conn.query(queries_1.default.UPDATE_ELEGANTE, [tipo, color, marca, cantidad, precio, id]);
    return res.json(`Zapato Elegante ${id} actualizado satisfactoriamente`);
});
exports.updateElegante = updateElegante;
const deleteElegante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield db_1.conn.query(queries_1.default.DELETE_ELEGANTE, [id]);
    return res.json(`Zapato Elegante ${id} eliminado satisfactoriamente`);
});
exports.deleteElegante = deleteElegante;
