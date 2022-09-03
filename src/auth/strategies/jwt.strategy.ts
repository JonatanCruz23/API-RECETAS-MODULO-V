import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

//analiza el token que estamos enviando con cada petición

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "2ac86ab136c5a6e5b6581b01a562558baa34d2a6483b00f77a1ea8774578345e", // esta llave debe de ser la misma aqui y en el modulo auth
    });
  }

  async validate(payload: any) {
    return { usuario: payload.usuario };
  }
}