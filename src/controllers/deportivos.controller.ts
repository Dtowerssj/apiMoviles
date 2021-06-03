import {Request, Response} from 'express'
import {conn} from '../utils/db'
import queries from '../utils/queries'
import {QueryResult} from 'pg'

export const getDeportivos = async (req: Request , res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await conn.query(queries.GET_DEPORTIVOS);
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
} 

export const getDeportivobyId = async (req:Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await conn.query(queries.GET_DEPORTIVO_BY_ID, [id]);
    return res.json(response.rows);
}

 export const createDeportivo = async (req:Request, res: Response): Promise<Response> => {
    const {marca, color, cantidad, precio } = req.body;
    const response: QueryResult = await conn.query(queries.INSERT_DEPORTIVO, [marca, color, cantidad, precio]);
    console.log(marca, color, cantidad, precio)
    return res.json({
        message: 'Zapato Deportivo creado',
        body: {
            bota: {
                marca,
                color,
                cantidad, 
                precio
            }
        }
    })
}

export const updateDeportivo = async (req:Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const {marca, color, cantidad, precio } = req.body;
    const response: QueryResult = await conn.query(queries.UPDATE_DEPORTIVO, [ marca, color, cantidad, precio, id]);
    return res.json(`Zapato Deportivo ${id} actualizado satisfactoriamente`);
}

export const deleteDeportivo = async (req:Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await conn.query(queries.DELETE_DEPORTIVO, [id]); 
    return res.json(`Zapato Deportivo ${id} eliminado satisfactoriamente`);
} 