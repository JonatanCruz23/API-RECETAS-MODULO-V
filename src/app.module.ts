import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecetaModule } from './receta/receta.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { PasoModule } from './paso/paso.module';
import { IngredienteModule } from './ingrediente/ingrediente.module';
import configuration from 'src/config/configuration';

@Module({
  imports: [
    MongooseModule.forRoot(configuration.mongo.conection), 
    UsuarioModule, 
    AuthModule,
    RecetaModule,
    PasoModule,
    IngredienteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
