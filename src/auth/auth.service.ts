import { Injectable, NotAcceptableException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { LoginUsuarioDto } from 'src/usuario/dto/login-usuario.dto';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsuarioService, private jwtService: JwtService) { }
    
    async login(usuarioDTO: LoginUsuarioDto) {
        const usuario:Usuario = await this.usersService.getUserByEmail(usuarioDTO.usuario);
        
        if (!usuario) return   new NotAcceptableException('No existe el usuario indicado');
        const validarPassword = await bcrypt.compare(usuarioDTO.clave, usuario.clave);
        if (usuario && validarPassword) {
            const payload = { usuario: usuario.usuario, id: usuario._id };
            return {
                access_token: this.jwtService.sign(payload),
            };
        }
        return false;
    }
}
