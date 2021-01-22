import {combineReducers} from 'redux';

//reducers
import auth from './auth';
import user from './user';
import adress from './adress';
import product from './product';
import cart from './cart';

const rootReducer = combineReducers({
  auth,
  user,
  adress,
  product,
  cart,
});

export default (state, action) =>
  rootReducer(action.type === 'USER_LOGOUT' ? undefined : state, action);
