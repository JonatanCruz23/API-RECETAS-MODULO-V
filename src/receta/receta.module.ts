import { Module } from '@nestjs/common';
import { RecetaService } from './receta.service';
import { CloudstorageService } from 'src/cloudstorage/cloudstorage.service';
import { RecetaController } from './receta.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecetaSchema } from './entities/receta.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Receta', schema: RecetaSchema}])],
  controllers: [RecetaController],
  providers: [RecetaService, CloudstorageService]
})
export class RecetaModule {}
