import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UserDocument, Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from 'src/usuario/dto/create-usuario.dto';

@Injectable()
export class UsuarioService {

    constructor(@InjectModel('usuario') private readonly userModel: Model<UserDocument>) { }

    async createUser(createUserModel:CreateUsuarioDto): Promise<Usuario> {
        // Password encryption using the bcrypt library
        const saltOrRounds = 10;
        const claveEncriptada = await bcrypt.hash(createUserModel.clave, saltOrRounds);
        
        // New user model to encrypt password
        const newUserModel:CreateUsuarioDto = createUserModel;
        newUserModel.clave = claveEncriptada;
        
        // Saving user
        const userCreated = await this.userModel.create(newUserModel)
        return  await userCreated.save();

    }
    async getUserByEmail( usuario: string ): Promise<Usuario> {
        const user = await this.userModel.findOne({ usuario });
        return user;
    }
  
}
