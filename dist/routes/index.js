"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const botas_controller_1 = require("../controllers/botas.controller");
const deportivos_controller_1 = require("../controllers/deportivos.controller");
const elegantes_controller_1 = require("../controllers/elegantes.controller");
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const router = express_1.Router();
//Botas
router.get('/botas', botas_controller_1.getBotas);
router.get('/botas/:id', botas_controller_1.getBotabyId);
router.post('/botas', botas_controller_1.createBota);
router.put('/botas/:id', botas_controller_1.updateBota);
router.delete('/botas/:id', botas_controller_1.deleteBota);
//Deportivos
router.get('/deportivos', deportivos_controller_1.getDeportivos);
router.get('/deportivos/:id', deportivos_controller_1.getDeportivobyId);
router.post('/deportivos', deportivos_controller_1.createDeportivo);
router.put('/deportivos/:id', deportivos_controller_1.updateDeportivo);
router.delete('/deportivos/:id', deportivos_controller_1.deleteDeportivo);
//Elegantes
router.get('/elegantes', elegantes_controller_1.getElegantes);
router.get('/elegantes/:id', elegantes_controller_1.getElegantebyId);
router.post('/elegantes', elegantes_controller_1.createElegante);
router.put('/elegantes/:id', elegantes_controller_1.updateElegante);
router.delete('/elegantes/:id', elegantes_controller_1.deleteElegante);
//Trabajadores
router.get('/usuarios', usuarios_controller_1.getUsuarios);
router.get('/usuarios/:id', auth_controller_1.loginUsuario);
router.post('/usuarios', usuarios_controller_1.createUsuario);
router.put('/usuarios/:id', usuarios_controller_1.updateUsuario);
router.delete('/usuarios/:id', usuarios_controller_1.deleteUsuario);
exports.default = router;
