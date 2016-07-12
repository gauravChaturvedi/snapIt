import * as types from '../constants/LoginActionTypes';

export function loginSuccess() {
  console.log('Login action successful deoude buddy brio deoude buddy brio');
  return {
    type: types.LOGIN_SUCCESS
  };
}
