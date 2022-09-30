import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CreateIngredienteDto } from 'src/ingrediente/dto/create-ingrediente.dto';
import { CreatePasoDto } from 'src/paso/dto/create-paso.dto';
export class CreateRecetaDto {
    @ApiProperty({ example: "Pupusas revueltas" })
    nombre: string;

    @IsOptional()
    @ApiPropertyOptional()
    @ApiProperty({ example: "Platillo tipico de El salvador" })
    descripcion?: string;

    @IsOptional()
    @ApiPropertyOptional()
    @ApiProperty({ example: "https://www.recetassalvador.com/base/stock/Recipe/32-image/32-image_web.jpg" })
    portada?: string;

    @ApiProperty({ type: [CreateIngredienteDto] })
    ingredientes: CreateIngredienteDto[];

    @ApiProperty({ type: [CreatePasoDto] })
    pasos: CreatePasoDto[];
    
    @ApiProperty({ example: true })
    estado?: Boolean;
    
    @ApiProperty({ example: "1" })
    IdUsuario: string;
}
