/**
 * @description 自定义业务状态码
 */
export enum ApiErrCode {
  SUCCESS = 0,

  NOT_LOGIN = 10000,
  USERNAME_OR_PASSWORD_ERROR = 10001,
}

const apiErrMsgMap = {
  [ApiErrCode.SUCCESS]: 'success',
  [ApiErrCode.NOT_LOGIN]: '用户未登录',
  [ApiErrCode.USERNAME_OR_PASSWORD_ERROR]: '账号或者密码错误',
};

export { apiErrMsgMap };
