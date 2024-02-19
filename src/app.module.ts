import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import * as process from "process";
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import { TaskModule } from './task/task.module';


const environment = process.env.NODE_ENV || 'development';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
      TaskModule,
      ConfigModule.forRoot({
         envFilePath: `.env.${environment}`,
         isGlobal: true,
      }),
      MongooseModule.forRoot(
          process.env.MONGODB_WRITE_CONNECTION_STRING,
      ),
    ],
})

export class AppModule {}