import { Controller, UseGuards, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PasoService } from './paso.service';
import { CreatePasoDto } from './dto/create-paso.dto';
import { UpdatePasoDto } from './dto/update-paso.dto';

@ApiTags("Receta - Paso")
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard)
@Controller('paso')
export class PasoController {

    constructor(private readonly pasoService: PasoService) {}

    @ApiBody({type:CreatePasoDto})
    @Post(':id/paso')
    async createStep(
      @Param('id') id: string,
      @Body() paso: CreatePasoDto,
    ) {
      return this.pasoService.createStep(id, paso);
    }
  
    @ApiBody({type:UpdatePasoDto})
    @Put(':id/paso/:idPaso')
    async updateStep(@Param('id') id: string, @Param('idPaso') idPaso: string, @Body() paso: UpdatePasoDto) {
      return this.pasoService.updateStep(id, idPaso, paso);
    }
  
    @Delete(':id/paso/:idPaso')
    async deleteStep(
      @Param('id') id: string,
      @Param('idPaso') idPaso: string,
    ) {
      return this.pasoService.deleteStep(id, idPaso);
    }
}
