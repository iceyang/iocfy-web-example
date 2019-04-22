import { User } from './model';
export default class UserDao {
    create(user: User): User;
    findById(id: number): User;
}
