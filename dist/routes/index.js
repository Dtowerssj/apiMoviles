"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const botas_controller_1 = require("../controllers/botas.controller");
const router = express_1.Router();
router.get('/botas', botas_controller_1.getBotas);
router.get('/botas/:id', botas_controller_1.getBotabyId);
router.post('/botas', botas_controller_1.createBota);
router.put('/botas/:id', botas_controller_1.updateBota);
router.delete('/botas/:id', botas_controller_1.deleteBota);
exports.default = router;
