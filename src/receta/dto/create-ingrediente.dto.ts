import { ApiProperty } from '@nestjs/swagger';
export class CreateIngredienteDto {
    @ApiProperty({ example: "Sal" })
    nombre: string;

    @ApiProperty({ example: 1 })
    cantidad: number;

    @ApiProperty({ example: "Una cucharada" })
    unidad: string;
}
