import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserDocument = Usuario & Document;

@Schema()
export class Usuario {
  
  _id: mongoose.Types.ObjectId;
  
  @Prop()
  usuario: string;

  @Prop()
  clave: string;
  
  @Prop()
  email: string;
  
  @Prop({
    type: String,
    default: "comercial"
  })
  rol;
  
  @Prop({
    type: Boolean,
    default: true
  })
  activado;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);