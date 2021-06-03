import {Request, Response} from 'express'
import {conn} from '../utils/db'
import queries from '../utils/queries'
import {QueryResult} from 'pg'

export const getElegantes = async (req: Request , res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await conn.query(queries.GET_ELEGANTES);
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
} 

export const getElegantebyId = async (req:Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await conn.query(queries.GET_ELEGANTE_BY_ID, [id]);
    return res.json(response.rows);
}

 export const createElegante = async (req:Request, res: Response): Promise<Response> => {
    const {tipo, color, marca, cantidad, precio } = req.body;
    const response: QueryResult = await conn.query(queries.INSERT_ELEGANTE, [tipo, color, marca, cantidad, precio]);
    console.log(tipo, color, marca, cantidad, precio)
    return res.json({
        message: 'zapato Elegante creado',
        body: {
            elegante: {
                tipo, 
                color, 
                marca, 
                cantidad, 
                precio
            }
        }
    })
}

export const updateElegante = async (req:Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const {tipo, color, marca, cantidad, precio } = req.body;
    const response: QueryResult = await conn.query(queries.UPDATE_ELEGANTE, [tipo, color, marca, cantidad, precio, id]);
    return res.json(`Zapato Elegante ${id} actualizado satisfactoriamente`);
}

export const deleteElegante = async (req:Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await conn.query(queries.DELETE_ELEGANTE, [id]); 
    return res.json(`Zapato Elegante ${id} eliminado satisfactoriamente`);
} 