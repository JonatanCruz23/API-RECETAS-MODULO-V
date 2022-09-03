import { Module } from '@nestjs/common';
import { IngredienteService } from './ingrediente.service';
import { IngredienteController } from './ingrediente.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { IngredienteSchema } from './entities/ingrediente.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Ingrediente', schema: IngredienteSchema}])],
  controllers: [IngredienteController],
  providers: [IngredienteService]
})
export class IngredienteModule {}
