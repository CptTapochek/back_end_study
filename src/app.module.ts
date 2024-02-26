import {Module} from "@nestjs/common";
import * as process from "process";
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';


const environment = process.env.NODE_ENV || 'development';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env.${environment}`,
            isGlobal: true,
        }),
        MongooseModule.forRoot(process.env.MONGODB_WRITE_CONNECTION_STRING),
        UsersModule,
        RolesModule,
        AuthModule,
    ],
})

export class AppModule {}