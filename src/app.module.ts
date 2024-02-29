import {Module} from "@nestjs/common";
import * as process from "process";
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { FileModule } from './file/file.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from "path";


const environment = process.env.NODE_ENV || 'development';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env.${environment}`,
            isGlobal: true,
        }),
        ServeStaticModule.forRoot({
           rootPath: path.resolve(__dirname, 'static')
        }),
        MongooseModule.forRoot(process.env.MONGODB_WRITE_CONNECTION_STRING),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FileModule,
    ],
})

export class AppModule {}