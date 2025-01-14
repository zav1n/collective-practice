import { Middleware } from 'redux';

export const errorHandleMiddleware: Middleware = store => next => action => {
  try {
    return next(action)
  } catch (error) {
    console.error('Caught exception:', error);
    throw error;
  }
}

