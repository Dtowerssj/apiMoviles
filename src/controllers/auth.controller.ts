import jwt from 'jsonwebtoken'
import config from '../config/aliases'
import {Request, Response} from 'express'
import {conn} from '../utils/db'
import queries from '../utils/queries'
import {QueryResult} from 'pg'
import { compare} from 'bcryptjs';



// creando json web token
export const createToken = async (StringID: string, user: string) => {
    const token = await jwt.sign({id: StringID, user_name: user}, config.jwtSecret || 'wildtoken', {
        expiresIn: 86400
    })   
    return token;
}


//Comparar clave para auth
export const comparePassword = (candidate: string, hash: string): Promise<boolean> => {
    return new Promise((res, rej) => {
      compare(candidate, hash, (err, isMatch) => {
        if (err) rej(err);
        res(isMatch);
      });
    });
  };


//Login de los trabajadors
export const loginUsuario = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const {usuario, clave} = req.body;
        const response: QueryResult = await conn.query(queries.LOGIN_USER, [id]);
        const original = response.rows[0].Clave;
        const usuarioOriginal = response.rows[0].usuario;
        const stringID = id.toString();

        try {
            if(usuarioOriginal === usuario && comparePassword(original, clave)){
                return await res.status(200).json({token: await createToken(stringID ,usuario)});
            }
                return res.json('No se pudo iniciar sesion');
            
        } catch (error1) {
            return res.json('No se pudo iniciar sesion');
            console.log(error1);
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json('Error');
    }
    
}