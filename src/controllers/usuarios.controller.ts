import {Request, Response} from 'express'
import {conn} from '../utils/db'
import queries from '../utils/queries'
import {QueryResult} from 'pg'
import { genSaltSync, hashSync } from 'bcryptjs';

//Interfaces de los users de los trabajadores
export interface Usuario {
    id: number;
    usuario: string;
    salario: number;
}
  
 export interface UsuarioLogin extends Usuario {
    clave: string;
  }

export const getUsuarios = async (req: Request , res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await conn.query(queries.GET_USERS);
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
} 

export const getUsuariobyId = async (req:Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await conn.query(queries.GET_USER_BY_ID, [id]);
    return res.json(response.rows);
}

 export const createUsuario = async (req:Request, res: Response): Promise<Response> => {
    
    const { usuario, clave, salario } = req.body;
    
    try {
        const salt = genSaltSync(10);
        const hashedPassword = hashSync(clave, salt);
        const response: QueryResult = await conn.query(queries.INSERT_USER, [usuario.toLowerCase(), hashedPassword, salario]);
        return res.json({
        message: 'Trabajador creado',
        body: {
            Trabajador: {
                usuario, hashedPassword, salario
            }
        }
    })
    } catch (error) {
        console.log(error);
        return res.status(500).json('Usuario no creado');
    }
    
}

export const updateUsuario = async (req:Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const {usuario, clave, salario } = req.body;
    const response: QueryResult = await conn.query(queries.UPDATE_USER, [ usuario, clave, salario, id]);
    return res.json(`Usuario ${id} actualizado satisfactoriamente`);
}

export const deleteUsuario = async (req:Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await conn.query(queries.DELETE_USER, [id]); 
    return res.json(`Usuario ${id} eliminado satisfactoriamente`);
} 