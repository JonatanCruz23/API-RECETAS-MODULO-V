import { CreateIngredienteDto } from "src/ingrediente/dto/create-ingrediente.dto";
import { ApiProperty } from '@nestjs/swagger';
export class CreateRecetaDto {
    @ApiProperty()
    nombre: string;

    @ApiProperty()
    descripcion?: string;

    @ApiProperty()
    portada?: string;

    @ApiProperty({ type: [CreateIngredienteDto] })
    ingredientes: CreateIngredienteDto[];
    
    @ApiProperty()
    estado?: Boolean;
    
    @ApiProperty()
    IdUsuario: string;
}
