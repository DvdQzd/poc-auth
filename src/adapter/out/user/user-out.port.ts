import { User } from "./user.entity";

export abstract class UserOutPort {
    abstract login(email: string, password: string): Promise<User>;
}