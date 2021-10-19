import { Provider } from "@nestjs/common";
import { UserAdapter } from "src/adapter/out/user/user.adapter";
import { UserOutPort } from "src/adapter/out/user/user-out.port";
import { UserService } from "src/adapter/out/user/user.service";

const adapterConfig: Provider[] = [
    UserService,
    {
        provide: UserAdapter,
        inject: [UserService],
        useFactory: (userService: UserService) => new UserAdapter(userService)
    },
    {
        provide: UserOutPort,
        useClass: UserAdapter,
    },
];

export default adapterConfig;
