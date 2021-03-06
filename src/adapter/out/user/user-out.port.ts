import { User } from "src/domain/user.domain";

export abstract class UserOutPort {
    abstract login(email: string, password: string): Promise<User>;
}