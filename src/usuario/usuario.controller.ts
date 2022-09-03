import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('usuario')
export class UsuarioController {

  constructor(private readonly usuarioService: UsuarioService) {}

  @Post() //se envia un json { "usuario":"Administrador",  "clave":"123456" }
  async createUser(@Body() UserData:CreateUsuarioDto): Promise<Usuario> {
    const result = await this.usuarioService.createUser(UserData);
    return result;
  }

  @UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso
  @Get('/searchEmail') //se envia un json { "usuario":"Administrador",  "clave":"123456" }
  async getUser( @Body('email') email: string): Promise<Usuario> {
    const resultado = await this.usuarioService.getUserByEmail(email)
    return resultado;
  }
}
