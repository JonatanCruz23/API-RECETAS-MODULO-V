import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { ApiTags, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
@ApiTags("Usuario")
@Controller('usuario')
export class UsuarioController {

  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @ApiBody({ type: CreateUsuarioDto })
  async createUser(@Body() UserData:CreateUsuarioDto): Promise<Usuario> {
    const result = await this.usuarioService.createUser(UserData);
    return result;
  }

  @Get('/searchEmail')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  async getUser( @Body('email') email: string): Promise<Usuario> {
    const resultado = await this.usuarioService.getUserByEmail(email)
    return resultado;
  }
}
