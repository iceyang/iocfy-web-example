import iocfy from 'iocfy-ts';
import Server from './server';

iocfy.scan(__dirname);
iocfy.init();

const server = <Server>iocfy.get('server');
server.run().then(() => {
  console.info('server is running now.')
});
