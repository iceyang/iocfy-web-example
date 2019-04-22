import { User } from './model';
export default class UserService {
    private userDao;
    register(nickname: string): void;
    findUserById(id: number): User;
}
