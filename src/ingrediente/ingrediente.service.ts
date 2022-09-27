import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Receta } from 'src/receta/interfaces/receta.interface';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';

@Injectable()
export class IngredienteService {
  constructor(@InjectModel('Receta') private recetaModel: Model<Receta>){}

  async createIngredient(id: string, createIngredienteDto: CreateIngredienteDto): Promise<Receta> {
    const recetas = await this.recetaModel.findById(id);
    recetas.ingredientes.push(createIngredienteDto);
    recetas.save();
    return recetas;
  }

  async deleteIngredient(_id: string, idIngrediente: string): Promise<Receta> {
    const recetas = await this.recetaModel.findOneAndUpdate({_id}, {
      $pull: {
        ingredientes:{
          _id: idIngrediente
        }
      }
    }, { new: true });
    return recetas;
  }

  async updateIngredient(_id: string, idIngrediente: string, updateIngredienteDto: UpdateIngredienteDto): Promise<Receta> {
    const recetas = await this.recetaModel.findOneAndUpdate({ _id, "ingredientes._id": idIngrediente}, {
      $set: { 
        "ingredientes.$._id": idIngrediente,
        "ingredientes.$.nombre": updateIngredienteDto.nombre,
        "ingredientes.$.cantidad": updateIngredienteDto.cantidad,
        "ingredientes.$.unidad": updateIngredienteDto.unidad
      }
    }, { new: true });
    return recetas;
  }
}