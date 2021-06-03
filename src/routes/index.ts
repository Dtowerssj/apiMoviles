import {Router} from 'express'
import {getBotas, getBotabyId, createBota, deleteBota, updateBota} from '../controllers/botas.controller'
import {getDeportivos, getDeportivobyId, createDeportivo, deleteDeportivo, updateDeportivo} from '../controllers/deportivos.controller'
import {getElegantes, getElegantebyId, createElegante, deleteElegante, updateElegante} from '../controllers/elegantes.controller'


const router = Router();

//Botas
router.get('/botas', getBotas);
router.get('/botas/:id', getBotabyId);
router.post('/botas', createBota);
router.put('/botas/:id', updateBota);
router.delete('/botas/:id', deleteBota);

//Deportivos
router.get('/deportivos', getDeportivos);
router.get('/deportivos/:id', getDeportivobyId);
router.post('/deportivos', createDeportivo);
router.put('/deportivos/:id', updateDeportivo);
router.delete('/deportivos/:id', deleteDeportivo);

//Elegantes
router.get('/elegantes', getElegantes);
router.get('/elegantes/:id', getElegantebyId);
router.post('/elegantes', createElegante);
router.put('/elegantes/:id', updateElegante);
router.delete('/elegantes/:id', deleteElegante);

export default router;