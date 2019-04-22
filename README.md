A web server example build with iocfy and koa.

## Getting Started

```
$ git clone https://github.com/iceyang/iocfy-web-example
$ cd iocfy-web-example
$ npm i
$ npm run
```

Then you will see:
```
> DEBUG=iocfy:* node dist/index.js

  iocfy:scanner load file: /Users/iceyang/project/github/iocfy-web-example/dist/dao/user.js +0ms
  iocfy:scanner load file: /Users/iceyang/project/github/iocfy-web-example/dist/index.js +3ms
  iocfy:scanner load file: /Users/iceyang/project/github/iocfy-web-example/dist/model.js +1ms
  iocfy:scanner load file: /Users/iceyang/project/github/iocfy-web-example/dist/server.js +0ms
  iocfy:scanner load file: /Users/iceyang/project/github/iocfy-web-example/dist/service/user.js +79ms
  iocfy:scanner load file: /Users/iceyang/project/github/iocfy-web-example/dist/user_dao.js +1ms
  iocfy:scanner load file: /Users/iceyang/project/github/iocfy-web-example/dist/user_service.js +1ms
  iocfy:context Init bean: server +0ms
  iocfy:context Init bean: customUserDao +0ms
  iocfy:context Init bean: userService +0ms
Vipc-Deploy Server listen at 3000
server is running now.
```

Now open brower and visit url `http://localhost:3000`.
