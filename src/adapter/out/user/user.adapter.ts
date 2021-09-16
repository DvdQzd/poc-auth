import { Injectable } from "@nestjs/common";
import { User } from "src/domain/user.domain";
import { UserService } from "src/mock_service/user.service";
import { UserOutPort } from "./user-out.port";

@Injectable()
export class UserAdapter implements UserOutPort{
    constructor(private readonly userService: UserService){}

    async login(email: string, password: string): Promise<User> {
        return await this.userService.getUser(email, password);
    }
}
