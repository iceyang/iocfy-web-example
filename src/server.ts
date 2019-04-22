import Koa from 'koa';
import { Bean, Inject } from 'iocfy-ts';
import UserService from './user_service';

@Bean('server', { port: 3000 })
export default class Server {
  private app: Koa = new Koa();
  private port: number;

  @Inject() private userService: UserService;

  async run() {
    this.app.use((ctx) => {
      ctx.body = this.userService.findUserById(1);
    });
    this.app.listen(this.port);
    
    console.info(`Vipc-Deploy Server listen at ${this.port}`);
  }
}
