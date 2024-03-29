"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const app = express_1.default();
//middlewares
app.use(express_1.default.json()); //Convertir datos que llegue a formato json
app.use(express_1.default.urlencoded({ extended: false })); //Formulario a json
app.use(index_1.default);
app.listen(4000);
console.log('Server on port', 4000);
