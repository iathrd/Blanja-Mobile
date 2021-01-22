import http from '../../helpers/http';
import qs from 'querystring';

export default {
  newProduct: (token, limit = 15) => ({
    type: 'NEW_PRODUCT',
    payload: http(token).get('product/newProduct', {params: {limit}}),
  }),
  getCatalog: (token, limit = 6) => ({
    type: 'GET_CATALOG',
    payload: http(token).get('product/newProduct', {params: {limit}}),
  }),
  popularProduct: (token) => ({
    type: 'POPULAR_PRODUCT',
    payload: http(token).get('product/popularProduct'),
  }),
  changeAdress: (token, data, id) => ({
    type: 'CHANGE_ADDRESS',
    payload: http(token).patch(`adress/updateAdress/${id}`, qs.stringify(data)),
  }),
  loadData: (token, link) => ({
    type: 'LOAD_DATA',
    payload: http(token).get(link),
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
  logOut: () => ({
    type: 'LOG_OUT',
  }),
};
