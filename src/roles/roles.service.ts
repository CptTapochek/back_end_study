import { Injectable } from '@nestjs/common';
import {CreateRoleDto} from "./dto/create-role.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Role} from "./roles.model";
import {Model} from "mongoose";

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role.name) private RoleModel: Model<Role>) {}

    async createRole(dto: CreateRoleDto) {
        const role = await this.RoleModel.create(dto);
        return role;
    }

    async getRoleByValue(value: String) {
        const role = await this.RoleModel.findOne({value: value}).exec();
        return role;
    }

    async getAllRoles() {
        const roles = await this.RoleModel.find().exec();
        return roles;
    }

}
