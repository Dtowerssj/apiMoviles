import {Router} from 'express'
import { loginUsuario } from '../controllers/auth.controller'
import {getUsuarios, getUsuariobyId, createUsuario, deleteUsuario, updateUsuario} from '../controllers/usuarios.controller'


const router = Router();

//Usuarios
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', loginUsuario);
router.post('/usuarios', createUsuario);
router.put('/usuarios/:id', updateUsuario);
router.delete('/usuarios/:id', deleteUsuario);

export default router;