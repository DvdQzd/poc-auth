import { UserJwt } from "src/domain/user.domain";

export abstract class UserInPort {
    abstract login(email: string, password: string): Promise<UserJwt>;
}