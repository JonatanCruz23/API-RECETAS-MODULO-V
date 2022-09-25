import { CreateIngredienteDto } from "./create-ingrediente.dto";
import { ApiProperty } from '@nestjs/swagger';
export class CreateRecetaDto {
    @ApiProperty({ example: "Pupusas revueltas" })
    nombre: string;

    @ApiProperty({ example: "Platillo tipico de El salvador" })
    descripcion?: string;

    @ApiProperty({ example: "https://www.recetassalvador.com/base/stock/Recipe/32-image/32-image_web.jpg" })
    portada?: string;

    @ApiProperty({ type: [CreateIngredienteDto] })
    ingredientes: CreateIngredienteDto[];
    
    @ApiProperty({ example: true })
    estado?: Boolean;
    
    @ApiProperty({ example: "1" })
    IdUsuario: string;
}
