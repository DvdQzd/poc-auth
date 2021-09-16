import { User } from "src/domain/user.domain";

export class UserService {
    async getUser(email: string, password: string): Promise<User> {
        const users = [
            {
                name: 'Cosme Fulanito',
                email: 'cosme@gmail.com',
                password: '12345',
                permissions: ['read', 'write'],
            },
            {
                name: 'Howard T. Duck',
                email: 'duck@gmail.com',
                password: '54321',
                permissions: ['read'],
            }
        ];

        return users.find(user => user.email === email && user.password === password);
    }
}