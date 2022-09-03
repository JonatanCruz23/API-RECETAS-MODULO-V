import { Module } from '@nestjs/common';
import { RecetaService } from './receta.service';
import { RecetaController } from './receta.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecetaSchema } from './entities/receta.entity';
import { IngredienteSchema } from '../ingrediente/entities/ingrediente.entity';



@Module({
  imports: [MongooseModule.forFeature([{name: 'Receta', schema: RecetaSchema},{ name: 'Ingrediente', schema: IngredienteSchema}])],
  controllers: [RecetaController],
  providers: [RecetaService]
})
export class RecetaModule {}
