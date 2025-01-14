// 负责记录每个 action 的触发情况和状态的变化，便于调试和监控应用的运行过程。
/**
 * 具体职责
  记录所有触发的 action：
    记录 action 的类型和相关数据（如 payload）。
  记录状态变化：
    打印触发 action 前后的状态，方便开发者检查状态是否正确更新。
  提高透明度：
    让开发者随时了解 Redux 的运行过程，便于定位问题。

 */

import { Middleware } from 'redux'

export const loggerMiddleware: Middleware = store => next => action => {
  console.log('Dispatching:', action);
  const result = next(action)
  console.log('Next State:', store.getState());
  return result
}