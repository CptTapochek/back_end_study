import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";


@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userModel.create(dto);
        return user;
    }

    async getAllUsers() {
        const users = await this.userModel.find().exec();
        return users;
    }
}
