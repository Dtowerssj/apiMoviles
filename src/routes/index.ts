import {Router} from 'express'
import {getBotas, getBotabyId, createBota, deleteBota, updateBota} from '../controllers/botas.controller'
import {getDeportivos, getDeportivobyId, createDeportivo, deleteDeportivo, updateDeportivo} from '../controllers/deportivos.controller'


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

export default router;