import { Injectable } from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Post} from "./post.model";
import {Model} from "mongoose";
import {FileService} from "../file/file.service";

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Post.name) private postModel: Model<Post>,
        private fileService: FileService
    ) {}

    async create(dto: CreatePostDto, image: any) {
        const time = Date.now();
        // const fileName = `date_file_${time}`;
        const fileName = await this.fileService.createFile(image);
        const post = await this.postModel.create({...dto, image: fileName});
        return post;
    }
}
