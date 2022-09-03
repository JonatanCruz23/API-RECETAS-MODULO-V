import { ApiProperty } from '@nestjs/swagger';
export class LoginUsuarioDto {
    @ApiProperty()
    usuario: string;

    @ApiProperty()
    clave: string;
}
