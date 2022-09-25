
import { Schema } from 'mongoose';
import { IngredienteSchema } from './ingrediente.entity'

export const RecetaSchema = new Schema({
    nombre: String,
    descripcion: String,
    portada: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVtYubQj2BXuEY5SkfIoS434pOJbEcsa28Q",
    },
    ingredientes: [IngredienteSchema],
    estado: {
        type: Boolean,
        default: true
    },
    idUsuario: String
})
