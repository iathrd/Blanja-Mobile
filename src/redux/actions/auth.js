import http from '../../helpers/http';
import qs from 'querystring';

export default {
  doLogin: (data) => ({
    type: 'LOGIN',
    payload: http().post('/auth/login/custommer', qs.stringify(data)),
  }),
  register: (data) => ({
    type: 'REGISTER',
    payload: http().post('auth/signup/custommer', qs.stringify(data)),
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
  logOut: () => ({
    type: 'LOG_OUT',
  }),
};
