import { UserInPort } from "src/adapter/in/user-in.port";
import { UserJwt } from "src/domain/user.domain";
import { UserLoginUseCase } from "./user-login.usecase";

export class AuthFacade implements UserInPort{
    constructor(private readonly userLoginUseCase: UserLoginUseCase){}

    async login(email:string, password:string): Promise<UserJwt> {
        return this.userLoginUseCase.login(email, password);
    }
}