import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PasoService } from './paso.service';
import { PasoController } from './paso.controller';
import { RecetaSchema } from 'src/receta/entities/receta.entity';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Receta', schema: RecetaSchema}])],
    controllers: [PasoController],
    providers: [PasoService]
})
export class PasoModule {}
