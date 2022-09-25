import { Controller, UseGuards, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiQuery, ApiBody } from '@nestjs/swagger';
import { RecetaService } from './receta.service';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { UpdateRecetaDto } from './dto/update-receta.dto';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags("Receta")
@Controller('receta')
export class RecetaController {
  constructor(private readonly recetaService: RecetaService) {}

  @ApiBody({type:CreateRecetaDto})
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createRecetaDto: CreateRecetaDto) {
    return this.recetaService.create(createRecetaDto);
  }

  @Get()
  findAll() {
    return this.recetaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recetaService.findOne(id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRecetaDto: UpdateRecetaDto) {
    return this.recetaService.update(id, updateRecetaDto);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recetaService.remove(id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @ApiBody({type:CreateIngredienteDto})
  @Post(':id/ingrediente')
  async createIngredient(
    @Param('id') id: string,
    @Body() ingrediente: CreateIngredienteDto,
  ) {
    return this.recetaService.createIngredient(id, ingrediente);
  }
}
