import { ApiProperty } from '@nestjs/swagger';
export class CreateIngredienteDto {
    @ApiProperty()
    nombre: string;

    @ApiProperty()
    cantidad: string;
}
