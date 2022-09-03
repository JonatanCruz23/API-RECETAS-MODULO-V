import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredienteModule } from './ingrediente/ingrediente.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    MongooseModule.forRoot(process.env.MONGO_DB), 
    UsuarioModule, 
    AuthModule,
    IngredienteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
