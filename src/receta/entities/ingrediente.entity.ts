import { Schema } from "mongoose";

export const IngredienteSchema = new Schema({
    nombre: String,
    cantidad: Number,
    unidad: String,
})
