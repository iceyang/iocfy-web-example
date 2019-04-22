import { Bean, Inject } from 'iocfy-ts';

import UserDao from './user_dao';
import { User } from './model';

@Bean('userService')
export default class UserService {
  @Inject('customUserDao') private userDao: UserDao;

  register(nickname: string) {
    const user: User = { nickname };
    this.userDao.create(user);
  }

  findUserById(id: number): User {
    return this.userDao.findById(id);
  }
}
