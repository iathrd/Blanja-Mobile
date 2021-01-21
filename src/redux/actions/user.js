import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getUser: (token) => ({
    type: 'GET_USER',
    payload: http(token).get('user/getUser'),
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
