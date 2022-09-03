import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredienteModule } from './ingrediente/ingrediente.module';
import { RecetaModule } from './receta/receta.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import configuration from 'src/config/configuration';

@Module({
  imports: [
    MongooseModule.forRoot(configuration.mongo.conection), 
    UsuarioModule, 
    AuthModule,
    IngredienteModule,
    RecetaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
