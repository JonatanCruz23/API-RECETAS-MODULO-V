import { Controller, UseGuards, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { IngredienteService } from './ingrediente.service';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';

@ApiTags("Receta - Ingrediente")
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard)
@Controller('receta')
export class IngredienteController {
    constructor(private readonly ingredienteService: IngredienteService) {}

    @ApiBody({type:CreateIngredienteDto})
    @Post(':id/ingrediente')
    async createIngredient(
      @Param('id') id: string,
      @Body() ingrediente: CreateIngredienteDto,
    ) {
      return this.ingredienteService.createIngredient(id, ingrediente);
    }

    @ApiBody({type:UpdateIngredienteDto})
    @Put(':id/ingrediente/:idIngrediente')
    async updateStep(@Param('id') id: string, @Param('idIngrediente') idIngrediente: string, @Body() ingrediente: UpdateIngredienteDto) {
      return this.ingredienteService.updateIngredient(id, idIngrediente, ingrediente);
    }
  
    @Delete(':id/ingrediente/:idIngrediente')
    async deleteStep(
      @Param('id') id: string,
      @Param('idIngrediente') idIngrediente: string,
    ) {
      return this.ingredienteService.deleteIngredient(id, idIngrediente);
    }
}
