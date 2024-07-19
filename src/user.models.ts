import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { IsNotEmpty, IsString } from 'class-validator';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    @Prop()
    @IsNotEmpty()
    @IsString()
    username: string;
    
    @Prop()
    @IsString()
    description: string;


}


export const UserSchema = SchemaFactory.createForClass(User);
