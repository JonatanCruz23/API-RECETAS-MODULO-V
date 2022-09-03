
import { Schema } from 'mongoose';
import { IngredienteSchema } from '../../ingrediente/entities/ingrediente.entity'

export const RecetaSchema = new Schema({
    nombre: String,
    descripcion: String,
    ingredientes: [IngredienteSchema],
    estado: {
        type: Boolean,
        default: true
    },
    idUsuario: String
})
