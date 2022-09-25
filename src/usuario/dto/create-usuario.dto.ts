import { ApiProperty } from '@nestjs/swagger';
export class CreateUsuarioDto {
    @ApiProperty({ example: "esau@gmail.com" })
    email?: string;

    @ApiProperty({ example: "esaug" })
    usuario: string;

    @ApiProperty({ example: "123456" })
    clave: string;
    
    @ApiProperty({ example: "admin" })
    rol?: string;
    
    @ApiProperty({ example: true })
    activado?: boolean;
}
