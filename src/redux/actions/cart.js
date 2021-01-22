import http from '../../helpers/http';
import qs from 'querystring';

export default {
  createCart: (token, data) => ({
    type: 'CREATE_CART',
    payload: http(token).post('cart/createCart', qs.stringify(data)),
  }),
  getCart: (token) => ({
    type: 'GET_CART',
    payload: http(token).get('cart/listCart'),
  }),
  deleteCart: (token, id) => ({
    type: 'DELETE_CART',
    payload: http(token).delete(`cart/deleteCart/${id}`),
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
  logOut: () => ({
    type: 'LOG_OUT',
  }),
};
