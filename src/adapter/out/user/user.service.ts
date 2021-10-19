import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/adapter/out/user/user.entity";
// import { UserResponse } from "src/domain/user.domain";
import { Repository } from "typeorm";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}
      
    async getUser(email: string, password: string): Promise<User> {
        return this.usersRepository.findOne({ where : { email, password }});
    }
}