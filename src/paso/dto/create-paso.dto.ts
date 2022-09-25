import { ApiProperty } from '@nestjs/swagger';
export class CreatePasoDto {
    @ApiProperty({ example: 1 })
    numero: number;

    @ApiProperty({ example: "Rebanar los tomates en partes pequeñas" })
    descripcion: string;
}
