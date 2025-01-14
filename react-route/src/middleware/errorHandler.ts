/**
 * 负责捕获和处理 Redux action 流程中的错误，提升应用的健壮性和容错能力。
 * 具体职责
  捕获异常：
    捕获中间件链或 reducer 中发生的错误。
  记录错误：
    打印错误信息，便于调试和排查问题。
  不中断应用：
    即使发生错误，也能让其他操作正常进行。
  支持自定义逻辑：
    比如发送错误信息到监控服务（如 Sentry）。
 */


import { Middleware } from 'redux';

export const errorHandleMiddleware: Middleware = store => next => action => {
  try {
    return next(action)
  } catch (error) {
    console.error('Caught exception:', error);
    throw error;
  }
}

