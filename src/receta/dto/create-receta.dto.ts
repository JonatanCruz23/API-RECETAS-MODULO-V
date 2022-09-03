import { CreateIngredienteDto } from "src/ingrediente/dto/create-ingrediente.dto";
export class CreateRecetaDto {
    nombre:       string;
    descripcion?:  string;
    ingredientes: CreateIngredienteDto[];
    estado?:       Boolean;
    IdUsuario:    string;
}
