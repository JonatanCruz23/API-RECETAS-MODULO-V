import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("Authentication")
@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

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
