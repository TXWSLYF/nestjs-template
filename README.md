# nestjs-template

## Introduction

`nestjs-template` 是一个 `nestjs` 初始化脚手架，提供了一些通用封装，减少重复工作量。

## Features

目前实现的功能有：

1. 统一返回数据结构
   ```json
   {
     "data": {
       "msg": "hello"
     },
     "errCode": 0,
     "errMsg": "success"
   }
   ```
2. 自定义业务 api 异常

   1. 默认 `statusCode = 200`

      ```js
      // 抛出业务 api 异常（默认 statusCode = 200）
      @Get('/api-error')
      getApiError() {
        throw new ApiException(ApiErrCode.NOT_LOGIN);
      }
      ```

      `response`：

      ![api-error](https://s1.ax1x.com/2020/09/21/wq0dHJ.jpg)

      ```json
      {
        "errCode": 10000,
        "errMsg": "用户未登录"
      }
      ```

   2. 自定义 `statusCode`

      ```js
      // 抛出业务 api 异常（自定义 statusCode）
      @Get('/api-forbidden')
      getApiForbidden() {
        throw new ApiException(ApiErrCode.NOT_LOGIN, HttpStatus.FORBIDDEN);
      }
      ```

      `response`：

      ![api-forbidden](https://s1.ax1x.com/2020/09/21/wqB92V.jpg)

      ```json
      {
        "errCode": 10000,
        "errMsg": "用户未登录"
      }
      ```

## Todos

- [x] 统一返回数据结构
- [x] 自定义业务 api 异常
- [ ] 管道-参数校验
- [ ] 多环境配置文件区分
- [ ] mysql curd 整合
- [ ] 文件上传
- [ ] 登录验证
- [ ] 权限控制

## References

1. [nestjs 统一返回格式](https://yueqingsheng.github.io/post/nestjs-tong-yi-fan-hui-ge-shi/)
2. [nestjs web 开发整合](https://juejin.im/post/6844903959631495175#heading-2)
3. [whats-the-difference-between-interceptor-vs-middleware-vs-filter-in-nest-js](https://stackoverflow.com/questions/54863655/whats-the-difference-between-interceptor-vs-middleware-vs-filter-in-nest-js)
4. [Koa2 和 Express 中间件对比](https://www.cnblogs.com/cckui/p/10991062.html)
5. [nestjs authentication](https://docs.nestjs.com/techniques/authentication)
5. [BearerToken之JWT的介绍](https://www.cnblogs.com/lori/p/11246611.html)
5. [JSON Web Tokens vs. Session Cookies for Authentication](https://medium.com/better-programming/json-web-tokens-vs-session-cookies-for-authentication-55a5ddafb435)
5. [Session vs Token Based Authentication](https://medium.com/@sherryhsu/session-vs-token-based-authentication-11a6c5ac45e4)
5. [NestJS Basic Auth and Sessions（值得一看）](http://blog.exceptionfound.com/2018/06/07/nestjs-basic-auth-and-sessions/)
5. [使用jwt完成sso单点登录](https://blog.csdn.net/weixin_41282397/article/details/85049850)

