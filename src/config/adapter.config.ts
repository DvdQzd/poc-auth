import { Provider } from "@nestjs/common";
import { UserAdapter } from "src/adapter/out/user/user.adapter";
import { UserOutPort } from "src/adapter/out/user/user-out.port";

const adapterConfig: Provider[] = [
    {
        provide: UserOutPort,
        useClass: UserAdapter,
    },
];

export default adapterConfig;
