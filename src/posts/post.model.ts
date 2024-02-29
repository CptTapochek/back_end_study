import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {ApiProperty} from "@nestjs/swagger";


interface PostCreationAttribute {
    title: string;
    content: string;
    userId: string;
    image: string;
}

@Schema()
export class Post extends Document<Post, PostCreationAttribute> {
    @ApiProperty({example: "Post title", description: "Title"})
    @Prop({ isRequired: true })
    title: string;

    @ApiProperty({example: "Content", description: "Content"})
    @Prop({ default: "" })
    content: string;

    @ApiProperty({example: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flower_stock_photo.jpg", description: "Image url"})
    @Prop({ nullable: true })
    image: string;

    @ApiProperty({example: "29/02/2024", description: "Date of added"})
    @Prop({ default: new Date() })
    createdAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);