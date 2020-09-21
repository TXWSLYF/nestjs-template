/**
 * @description 自定义业务状态码
 */
export enum ApiErrCode {
  SUCCESS = 0, // success

  NOT_LOGIN = 10000, // 用户未登录
}

const apiErrMsgMap = {
  [ApiErrCode.SUCCESS]: 'success',
  [ApiErrCode.NOT_LOGIN]: '用户未登录',
};

export { apiErrMsgMap };
