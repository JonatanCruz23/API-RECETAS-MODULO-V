import { Ingrediente } from "./ingrediente.interface";
import { Paso } from "src/paso/interfaces/paso.interface";
export interface Receta {
    nombre: string;
    descripcion?: string;
    portada?: String,
    ingredientes?: Ingrediente[];
    pasos?: Paso[];
    estado?: boolean;
    IdUsuario: string;
}
