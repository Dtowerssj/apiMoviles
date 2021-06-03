"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const botas_controller_1 = require("../controllers/botas.controller");
const deportivos_controller_1 = require("../controllers/deportivos.controller");
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
exports.default = router;
