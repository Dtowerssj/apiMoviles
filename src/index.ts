import express from 'express'
import indexRoutes from './routes/index'

const app = express();

//middlewares
app.use(express.json()); //Convertir datos que llegue a formato json
app.use(express.urlencoded({extended: false})); //Formulario a json

app.use(indexRoutes);

app.listen(4000);
console.log('Server on port', 4000);