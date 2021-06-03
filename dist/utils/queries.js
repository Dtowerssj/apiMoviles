"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queries = {
    //Botas"
    GET_BOTAS: `SELECT * FROM public."Botas"`,
    GET_BOTA_BY_ID: `SELECT * FROM public."Botas" WHERE id = $1`,
    INSERT_BOTA: 'INSERT INTO public."Botas"("Tipo", "Color", "Marca", "Cantidad", "Precio") VALUES ($1, $2, $3, $4, $5)',
    DELETE_BOTA: 'DELETE FROM public."Botas" WHERE ID = $1',
    UPDATE_BOTA: 'UPDATE public."Botas" SET "Tipo"=$1, "Color"=$2, "Marca"=$3, "Cantidad"=$4, "Precio"=$5 WHERE id=$6',
    //Zapatos Deportivos
    GET_DEPORTIVOS: `SELECT * FROM public."ZapatosDeportivos"`,
    GET_DEPORTIVO_BY_ID: `SELECT * FROM public."ZapatosDeportivos" WHERE id = $1`,
    INSERT_DEPORTIVO: 'INSERT INTO public."ZapatosDeportivos"("Marca", "Color", "Cantidad", "Precio") VALUES ($1, $2, $3, $4)',
    DELETE_DEPORTIVO: 'DELETE FROM public."ZapatosDeportivos" WHERE ID = $1',
    UPDATE_DEPORTIVO: 'UPDATE public."ZapatosDeportivos" SET "Color"=$1, "Marca"=$2, "Cantidad"=$3, "Precio"=$4 WHERE id=$5',
    //Zapatos elegantes
    GET_ELEGANTES: `SELECT * FROM public.ZapatosElegantes`,
};
exports.default = queries;
