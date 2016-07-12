import { LOGIN_SUCCESS } from '../constants/LoginActionTypes.js';

const initialState = {
  loggedIn: false
};

export default function login(state = initialState, action = null) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...initialState,
        loggedIn: true
      };

    default:
      return state;
  }
}
