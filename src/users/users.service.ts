import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";
import {RolesService} from "../roles/roles.service";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";


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
        const user = await this.userModel.findOne({email: email}).exec();
        return user;
    }

    async addRole(dto: AddRoleDto) {
        let user = await this.userModel.findOne({_id: dto.userId}).exec();
        const role = await this.rolesService.getRoleByValue(dto.value);
        if(role && user) {
            user.role = role.value;
        }
        throw new HttpException("User or role does not found", HttpStatus.NOT_FOUND);
    }

    async ban(dto: BanUserDto) {
        let user = await this.userModel.findOne({_id: dto.userId}).exec();
        user.banned = true;
        user.banReason = dto.banReason;
        await user.save();
        return user;
    }
}
