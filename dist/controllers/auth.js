"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
export const signUpUsuario = async (body: UsuarioLogin): Promise<Usuario> => {
    const { usuario, salario, clave } = body;
    try {
      await conn.query('BEGIN');
      const salt = genSaltSync(10);
      const hashedPassword = hashSync(clave, salt);
      const response = (await conn.query(queries.SIGN_UP_USER, [usuario.toLowerCase(), hashedPassword, salario])).rows[0];
      const user: Usuario = {
          //id,
        usuario,
        salario,
      };
      await conn.query('COMMIT');
      return user;
    } catch (e) {
      await conn.query('ROLLBACK');
      throw e;
    }
  };
*/ 
