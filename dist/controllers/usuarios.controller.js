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
exports.deleteUsuario = exports.updateUsuario = exports.createUsuario = exports.getUsuariobyId = exports.getUsuarios = void 0;
const db_1 = require("../utils/db");
const queries_1 = __importDefault(require("../utils/queries"));
const bcryptjs_1 = require("bcryptjs");
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield db_1.conn.query(queries_1.default.GET_USERS);
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
});
exports.getUsuarios = getUsuarios;
const getUsuariobyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield db_1.conn.query(queries_1.default.GET_USER_BY_ID, [id]);
    return res.json(response.rows);
});
exports.getUsuariobyId = getUsuariobyId;
const createUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario, clave, salario } = req.body;
    try {
        const salt = bcryptjs_1.genSaltSync(10);
        const hashedPassword = bcryptjs_1.hashSync(clave, salt);
        const response = yield db_1.conn.query(queries_1.default.INSERT_USER, [usuario.toLowerCase(), hashedPassword, salario]);
        return res.json({
            message: 'Trabajador creado',
            body: {
                Trabajador: {
                    usuario, hashedPassword, salario
                }
            }
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Usuario no creado');
    }
});
exports.createUsuario = createUsuario;
const updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { usuario, clave, salario } = req.body;
    const response = yield db_1.conn.query(queries_1.default.UPDATE_USER, [usuario, clave, salario, id]);
    return res.json(`Usuario ${id} actualizado satisfactoriamente`);
});
exports.updateUsuario = updateUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield db_1.conn.query(queries_1.default.DELETE_USER, [id]);
    return res.json(`Usuario ${id} eliminado satisfactoriamente`);
});
exports.deleteUsuario = deleteUsuario;
