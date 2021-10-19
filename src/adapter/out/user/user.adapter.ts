import { Injectable } from "@nestjs/common";
// import { UserResponse } from "src/domain/user.domain";
// import { UserService } from "src/mock_service/user.service";
import { UserOutPort } from "./user-out.port";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Injectable()
export class UserAdapter implements UserOutPort{
    constructor(private readonly userService: UserService){}

    async login(email: string, password: string): Promise<User> {
        return await this.userService.getUser(email, password);
    }
}
