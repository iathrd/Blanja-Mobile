import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getAdress: (token, search) => ({
    type: 'GET_ADRESS',
    payload: http(token).get('adress/listAdress', {params: {search: search}}),
  }),
  createAdress: (token, data) => ({
    type: 'CREATE_ADRESS',
    payload: http(token).post('adress/createAdress', qs.stringify(data)),
  }),
  changeAdress: (token, data, id) => ({
    type: 'CHANGE_ADDRESS',
    payload: http(token).patch(`adress/updateAdress/${id}`, qs.stringify(data)),
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
  logOut: () => ({
    type: 'LOG_OUT',
  }),
};
