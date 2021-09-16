import { Body, Controller, Post } from "@nestjs/common";
import { UserJwtDTO } from "./dto/user-jwt.dto";
import { UserInPort } from "./user-in.port";

@Controller('auth')
export class AuthController {
    constructor(private readonly userInPort: UserInPort){}
    
    @Post('login')
    async login(@Body('email') email: string, @Body('password') password: string): Promise<UserJwtDTO> {
        return await this.userInPort.login(email, password);
    }
}