import { JwtService } from "@nestjs/jwt";
import { UserOutPort } from "src/adapter/out/user/user-out.port";
import { UserJwt } from "src/domain/user.domain";

export class UserLoginUseCase {

    constructor(private readonly userOutPort: UserOutPort, private readonly jwtService: JwtService) {}

    async login(email: string, password: string): Promise<UserJwt> {
        const user = await this.userOutPort.login(email, password);
        return { access_token: this.jwtService.sign(user) };
    }
}