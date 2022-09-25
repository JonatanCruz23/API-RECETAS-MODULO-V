import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IngredienteService } from './ingrediente.service';
import { IngredienteController } from './ingrediente.controller';
import { IngredienteSchema } from './entities/ingrediente.entity';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Receta', schema: IngredienteSchema}])],
    controllers: [IngredienteController],
    providers: [IngredienteService]
})
export class IngredienteModule {}
