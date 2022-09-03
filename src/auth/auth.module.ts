import { Module } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { MongooseModule } from "@nestjs/mongoose"
import { LocalStrategy } from "./strategies/local.strategy";
import { UsuarioSchema } from "src/usuario/entities/usuario.entity";
import { UsuarioModule } from "src/usuario/usuario.module";
import { UsuarioService } from "src/usuario/usuario.service";
import { JwtStrategy } from "./strategies/jwt.strategy";
@Module({
  imports: [UsuarioModule, PassportModule, JwtModule.register({
    secret: "2ac86ab136c5a6e5b6581b01a562558baa34d2a6483b00f77a1ea8774578345e",
    signOptions: { expiresIn: '5m' },
  }), MongooseModule.forFeature([{ name: "usuario", schema: UsuarioSchema }])],
  providers: [AuthService, UsuarioService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule { }