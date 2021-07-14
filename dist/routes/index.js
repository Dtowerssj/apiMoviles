"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const router = express_1.Router();
//Usuarios
router.get('/usuarios', usuarios_controller_1.getUsuarios);
router.get('/usuarios/:id', auth_controller_1.loginUsuario);
router.post('/usuarios', usuarios_controller_1.createUsuario);
router.put('/usuarios/:id', usuarios_controller_1.updateUsuario);
router.delete('/usuarios/:id', usuarios_controller_1.deleteUsuario);
exports.default = router;
