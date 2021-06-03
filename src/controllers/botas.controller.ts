import {Request, Response} from 'express'
import {conn} from '../utils/db'
import queries from '../utils/queries'
import {QueryResult} from 'pg'

export const getBotas = async (req: Request , res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await conn.query(queries.GET_BOTAS);
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
} 

export const getBotabyId = async (req:Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await conn.query(queries.GET_BOTA_BY_ID, [id]);
    return res.json(response.rows);
}

 export const createBota = async (req:Request, res: Response): Promise<Response> => {
    const {tipo, color, marca, cantidad, precio } = req.body;
    const response: QueryResult = await conn.query(queries.INSERT_BOTA, [tipo, color, marca, cantidad, precio]);
    console.log(tipo, color, marca, cantidad, precio)
    return res.json({
        message: 'Bota creada',
        body: {
            bota: {
                tipo, 
                color, 
                marca, 
                cantidad, 
                precio
            }
        }
    })
}

export const updateBota = async (req:Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const {tipo, color, marca, cantidad, precio } = req.body;
    const response: QueryResult = await conn.query(queries.UPDATE_BOTA, [tipo, color, marca, cantidad, precio, id]);
    return res.json(`Bota ${id} actualizada satisfactoriamente`);
}

export const deleteBota = async (req:Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await conn.query(queries.DELETE_BOTA, [id]); 
    return res.json(`Bota ${id} eliminada satisfactoriamente`);
} 