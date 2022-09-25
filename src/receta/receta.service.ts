import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { UpdateRecetaDto } from './dto/update-receta.dto';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { Receta } from './interfaces/receta.interface';

@Injectable()
export class RecetaService {

  constructor(@InjectModel('Receta') private recetaModel: Model<Receta>){}

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
  // ================= Ingredients Start ========================
  
  async createIngredient(id: string, createIngredienteDto: CreateIngredienteDto): Promise<Receta> {
    const recetas = await this.recetaModel.findById(id);
    recetas.ingredientes.push(createIngredienteDto);
    recetas.save();
    return recetas;
  }

  // ================= Ingredients End ========================
}
