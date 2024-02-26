import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";
import {RolesService} from "../roles/roles.service";


@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private rolesService: RolesService
    ) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userModel.create(dto);
        const role = await this.rolesService.getRoleByValue("USER") ?? "USER";
        return user;
    }

    async getAllUsers() {
        const users = await this.userModel.find().exec();
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userModel.findOne({value: email}).exec();
        return user;
    }
}
