import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Receta } from 'src/receta/interfaces/receta.interface';
import { CreatePasoDto } from './dto/create-paso.dto';
import { UpdatePasoDto } from './dto/update-paso.dto';

@Injectable()
export class PasoService {
    constructor(@InjectModel('Receta') private recetaModel: Model<Receta>){}

    async createStep(id: string, createPasoDto: CreatePasoDto): Promise<Receta> {
        const recetas = await this.recetaModel.findById(id);
        recetas.pasos.push(createPasoDto);
        recetas.save();
        return recetas;
    }
    
    async deleteStep(_id: string, idStep: string): Promise<Receta> {
      const recetas = await this.recetaModel.findOneAndUpdate({_id}, {
        $pull: {
          pasos:{
            _id: idStep
          }
        }
      });
      return recetas;
    }

    async updateStep(_id: string, idStep: string, updatePasoDto: UpdatePasoDto): Promise<Receta> {
      const recetas = await this.recetaModel.updateOne({ _id, "pasos._id": idStep}, {
        $set: { 
          "pasos.$._id": idStep,
          "pasos.$.numero": updatePasoDto.numero,
          "pasos.$.descripcion": updatePasoDto.descripcion
        }
      });
      return await this.recetaModel.findById(_id);
    }
}
