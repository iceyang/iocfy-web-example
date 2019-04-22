import { Bean } from 'iocfy-ts';
import { User } from './model'

@Bean('customUserDao')
export default class UserDao {
  create(user: User): User {
    console.info('Create user success');
    return Object.assign({ id: 1 }, user);
  }

  findById(id: number): User {
    return {
      id,
      nickname: 'Justin',
    };
  }
}
