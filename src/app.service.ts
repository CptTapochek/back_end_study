import {Injectable} from "@nestjs/common";


@Injectable()
export class AppService {
    getUsers() {
        return [{id: 2, name: "test user 2"}]
    }
}