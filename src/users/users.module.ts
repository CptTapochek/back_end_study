import {forwardRef, Module} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "./users.model";
import {RolesModule} from "../roles/roles.module";
import {Role, RoleSchema} from "../roles/roles.model";
import {AuthModule} from "../auth/auth.module";
import {Post, PostSchema} from "../posts/post.model";


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [
      UsersService,
  ]
})

export class UsersModule {}
