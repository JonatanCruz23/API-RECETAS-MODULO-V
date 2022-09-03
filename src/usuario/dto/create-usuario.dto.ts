import { ApiProperty } from '@nestjs/swagger';
export class CreateUsuarioDto {
    @ApiProperty()
    email?: string;

    @ApiProperty()
    usuario: string;

    @ApiProperty()
    clave: string;
    
    @ApiProperty()
    rol?: string;
    
    @ApiProperty()
    activado?: boolean;  
}
