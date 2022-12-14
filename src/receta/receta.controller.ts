import { Controller, UseGuards, Get, Post, Body, Param, Delete, Put, UseInterceptors, UploadedFile, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { RecetaService } from './receta.service';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { UpdateRecetaDto } from './dto/update-receta.dto';
import { FileUploadDto } from './dto/upload-image-receta.dto';
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

  @Post(':id/upload')
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({type: FileUploadDto})
  uploadImage(@Param('id') id: string, @UploadedFile() image: Express.Multer.File) {
    //console.log(image);
    return this.recetaService.uploadImage(id, image);
  }
}
