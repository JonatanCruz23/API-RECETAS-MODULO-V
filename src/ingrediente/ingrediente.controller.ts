import { Controller, UseGuards, Get, Post, Body, Param, Delete, Res, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiBody } from '@nestjs/swagger';
import { IngredienteService } from './ingrediente.service';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
@ApiTags("Ingrediente")
@Controller('ingrediente')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard)
export class IngredienteController {
  constructor(private readonly ingredienteService: IngredienteService) {}

  @Post()
  @ApiBody({ type: CreateIngredienteDto })
  create(@Res() res, @Body() createIngredienteDto: CreateIngredienteDto)  {
   const ingredienteCreado = this.ingredienteService.create(createIngredienteDto);
   res.json({
    mesage: 'usuario creado',
    ingredienteCreado
   })
  }

  @Get()
  findAll() {
    return this.ingredienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredienteService.findOne(+id);
  }

  @Put(':id')
  @ApiBody({ type: UpdateIngredienteDto })
  update(@Param('id') id: string, @Body() updateIngredienteDto: UpdateIngredienteDto) {
    return this.ingredienteService.update(+id, updateIngredienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredienteService.remove(+id);
  }
}
