import { Provider } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserInPort } from "src/adapter/in/user-in.port";
import { UserOutPort } from "src/adapter/out/user/user-out.port";
import { AuthFacade } from "src/application/auth.facade";
import { UserLoginUseCase } from "src/application/user-login.usecase";

const useCaseConfig: Provider[] = [
    {
        provide: UserLoginUseCase,
        inject: [UserOutPort, JwtService],
        useFactory: (userOutPort: UserOutPort, jwtService: JwtService) => new UserLoginUseCase(userOutPort, jwtService)
    },
    {
        provide: UserInPort,
        inject: [UserLoginUseCase],
        useFactory: (userLoginUseCase: UserLoginUseCase) => new AuthFacade(userLoginUseCase)
    },
];

export default useCaseConfig;