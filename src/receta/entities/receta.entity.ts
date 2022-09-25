
import { Schema } from 'mongoose';
import { IngredienteSchema } from 'src/ingrediente/entities/ingrediente.entity';
import { PasoSchema } from 'src/paso/entities/paso.entity';

export const RecetaSchema = new Schema({
    nombre: String,
    descripcion: String,
    portada: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVtYubQj2BXuEY5SkfIoS434pOJbEcsa28Q",
    },
    ingredientes:{
        type: [IngredienteSchema],
        require: false,
        default: []
    },
    pasos: {
        type: [PasoSchema],
        require: false,
        default: []
    },
    estado: {
        type: Boolean,
        default: true
    },
    idUsuario: String
})
