  
const queries = {
    //Botas"
    GET_BOTAS: `SELECT * FROM public."Botas"`,
    GET_BOTA_BY_ID: `SELECT * FROM public."Botas" WHERE id = $1`,
    INSERT_BOTA: 'INSERT INTO public."Botas"("Tipo", "Color", "Marca", "Cantidad", "Precio") VALUES ($1, $2, $3, $4, $5)',
    DELETE_BOTA: 'DELETE FROM public."Botas" WHERE ID = $1',
    UPDATE_BOTA: 'UPDATE public."Botas" SET "Tipo"=$1, "Color"=$2, "Marca"=$3, "Cantidad"=$4, "Precio"=$5 WHERE id=$6',

    //Zapatos Deportivos
    GET_DEPORTIVOS: `SELECT * FROM public.ZapatosDeportivos`,

    //Zapatos elegantes
    GET_ELEGANTES: `SELECT * FROM public.ZapatosElegantes`,
};
  
  export default queries;