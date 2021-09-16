export interface User {
    name: string;
    email: string;
    password: string;
    permissions: string[];
}

export interface UserJwt {
    access_token: string;
}
