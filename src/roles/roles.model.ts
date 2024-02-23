import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {ApiProperty} from "@nestjs/swagger";


interface RoleCreationAttribute {
    value: string,
    description: string
}

@Schema()
export class Role extends Document<Role, RoleCreationAttribute> {
    @ApiProperty({example: "ADMIN", description: "Role value"})
    @Prop({ isRequired: true, unique: true })
    value: string;

    @ApiProperty({example: "Text", description: "Role description"})
    @Prop({ isRequired: false, unique: false, default: "" })
    description: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);