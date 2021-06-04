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
exports.loginUsuario = exports.comparePassword = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const aliases_1 = __importDefault(require("../config/aliases"));
const db_1 = require("../utils/db");
const queries_1 = __importDefault(require("../utils/queries"));
const bcryptjs_1 = require("bcryptjs");
// creando json web token
const createToken = (StringID, user) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield jsonwebtoken_1.default.sign({ id: StringID, user_name: user }, aliases_1.default.jwtSecret || 'wildtoken', {
        expiresIn: 86400
    });
    return token;
});
exports.createToken = createToken;
//Comparar clave para auth
const comparePassword = (candidate, hash) => {
    return new Promise((res, rej) => {
        bcryptjs_1.compare(candidate, hash, (err, isMatch) => {
            if (err)
                rej(err);
            res(isMatch);
        });
    });
};
exports.comparePassword = comparePassword;
//Login de los trabajadors
const loginUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { usuario, clave } = req.body;
        const response = yield db_1.conn.query(queries_1.default.LOGIN_USER, [id]);
        const original = response.rows[0].Clave;
        const usuarioOriginal = response.rows[0].usuario;
        const stringID = id.toString();
        try {
            if (usuarioOriginal === usuario && exports.comparePassword(original, clave)) {
                return yield res.status(200).json({ token: yield exports.createToken(stringID, usuario) });
            }
            return res.json('No se pudo iniciar sesion');
        }
        catch (error1) {
            return res.json('No se pudo iniciar sesion');
            console.log(error1);
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Error');
    }
});
exports.loginUsuario = loginUsuario;
