import { Ingrediente } from "src/ingrediente/interfaces/ingrediente.interface"; 

export interface Receta {
    nombre:       string;
    descripcion?:  string;
    ingredientes: Ingrediente[];
    estado?:       boolean;
    IdUsuario:    string;
}
