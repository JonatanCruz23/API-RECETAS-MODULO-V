import { Ingrediente } from "src/ingrediente/interfaces/ingrediente.interface"; 

export interface Receta {
    nombre:       string;
    descripcion?:  string;
    portada?: String,
    ingredientes: Ingrediente[];
    estado?:       boolean;
    IdUsuario:    string;
}
