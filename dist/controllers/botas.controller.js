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
exports.deleteBota = exports.updateBota = exports.createBota = exports.getBotabyId = exports.getBotas = void 0;
const db_1 = require("../utils/db");
const queries_1 = __importDefault(require("../utils/queries"));
const getBotas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield db_1.conn.query(queries_1.default.GET_BOTAS);
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
});
exports.getBotas = getBotas;
const getBotabyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield db_1.conn.query(queries_1.default.GET_BOTA_BY_ID, [id]);
    return res.json(response.rows);
});
exports.getBotabyId = getBotabyId;
const createBota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tipo, color, marca, cantidad, precio } = req.body;
    const response = yield db_1.conn.query(queries_1.default.INSERT_BOTA, [tipo, color, marca, cantidad, precio]);
    console.log(tipo, color, marca, cantidad, precio);
    return res.json({
        message: 'Bota creada',
        body: {
            bota: {
                tipo,
                color,
                marca,
                cantidad,
                precio
            }
        }
    });
});
exports.createBota = createBota;
const updateBota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { tipo, color, marca, cantidad, precio } = req.body;
    const response = yield db_1.conn.query(queries_1.default.UPDATE_BOTA, [tipo, color, marca, cantidad, precio, id]);
    return res.json(`Bota ${id} actualizada satisfactoriamente`);
});
exports.updateBota = updateBota;
const deleteBota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield db_1.conn.query(queries_1.default.DELETE_BOTA, [id]);
    return res.json(`Bota ${id} eliminada satisfactoriamente`);
});
exports.deleteBota = deleteBota;
