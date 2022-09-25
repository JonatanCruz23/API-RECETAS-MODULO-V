import { ApiProperty } from '@nestjs/swagger';
export class LoginUsuarioDto {
    @ApiProperty({ example: "esaug" })
    usuario: string;

    @ApiProperty({ example: "123456" })
    clave: string;
}
