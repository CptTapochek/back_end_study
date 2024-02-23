import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {ApiProperty} from "@nestjs/swagger";


interface UserCreationAttribute {
    email: string,
    password: string
}

@Schema()
export class User extends Document<User, UserCreationAttribute> {
    @ApiProperty({example: "andreib@nextlogic.ro", description: "Email"})
    @Prop({ isRequired: true, unique: true })
    email: string;

    @ApiProperty({example: "**********", description: "Password"})
    @Prop({ isRequired: true, unique: false })
    password: string;

    @ApiProperty({example: "false", description: "User is banned or no"})
    @Prop({ default: false })
    banned: boolean;

    @ApiProperty({example: "", description: "Banned reason"})
    @Prop({ default: "" })
    banReason: string;

    @ApiProperty({example: "25/02/2000", description: "Date of registration"})
    @Prop({ default: new Date() })
    createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);