import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { LoginUsuarioDto } from 'src/usuario/dto/login-usuario.dto';
@ApiTags("Authentication")
@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @ApiBody({type:LoginUsuarioDto})
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.body); 
    }

    @UseGuards(JwtAuthGuard)
    @Get('secreto')
    secreto(@Request() req) {
        return { mensaje: "Usuario autenticado" };
    }
}
