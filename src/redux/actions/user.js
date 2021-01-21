import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getUser: (token) => ({
    type: 'GET_USER',
    payload: http(token).get('user/getUser'),
  }),
  updateAvatar: (token, data) => ({
    type: 'UPDATE_AVATAR',
    payload: http(token).patch('user/updateUser/custommer', data),
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
  logOut: () => ({
    type: 'LOG_OUT',
  }),
};
