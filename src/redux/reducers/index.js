import {combineReducers} from 'redux';

//reducers
import auth from './auth';
import user from './user';
import adress from './adress';

const rootReducer = combineReducers({
  auth,
  user,
  adress,
});

export default (state, action) =>
  rootReducer(action.type === 'USER_LOGOUT' ? undefined : state, action);
