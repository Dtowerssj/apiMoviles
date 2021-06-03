import {Router} from 'express'
import {getBotas, getBotabyId, createBota, deleteBota, updateBota} from '../controllers/botas.controller'


const router = Router();

router.get('/botas', getBotas);
router.get('/botas/:id', getBotabyId);
router.post('/botas', createBota);
router.put('/botas/:id', updateBota);
router.delete('/botas/:id', deleteBota);

export default router;