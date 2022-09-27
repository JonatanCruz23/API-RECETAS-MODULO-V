import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { UpdateRecetaDto } from './dto/update-receta.dto';
import { Receta } from './interfaces/receta.interface';
import { CloudstorageService } from 'src/cloudstorage/cloudstorage.service';

@Injectable()
export class RecetaService {

  constructor(
    @InjectModel('Receta') private recetaModel: Model<Receta>,
    private cloudstorageService: CloudstorageService
  ){}

  async create(createRecetaDto: CreateRecetaDto) {
    const createReceta = new this.recetaModel(createRecetaDto);
    return await this.recetaModel.create(createReceta);
  }

  async findAll(): Promise<Receta[]> {
    const recetas = await this.recetaModel.find();
    return recetas;
  }

  async findOne(id: string): Promise<Receta> {
    const receta = await this.recetaModel.findById(id);
    return receta;
  }

  async update(id: string, updateRecetaDto: UpdateRecetaDto): Promise<Receta> {
    const recetas = await this.recetaModel.findByIdAndUpdate(id, updateRecetaDto, { 
      new: true 
    });
    return recetas;
  }

  async remove(id: string): Promise<Receta> {
    const recetas = await this.recetaModel.findByIdAndRemove(id);
    return recetas;
  }

  async uploadImage(id: string, image: Express.Multer.File): Promise<Receta> {
    const receta = await this.recetaModel.findById(id);
    if(!receta) throw "El id no pertenece a una receta";

    // Delete existing image
    await this.cloudstorageService.deleteFile(receta.portada);

    // Uploading new image
    const imageUrl = await this.cloudstorageService.uploadPresciptionImage(id, image);
    if(!imageUrl) throw "Error al subir la imagen";

    // Updating url image
    const recetas = await this.recetaModel.findByIdAndUpdate(id, { portada: imageUrl }, { 
      new: true 
    });
    return recetas;
  }
}
