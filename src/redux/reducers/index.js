import {combineReducers} from 'redux';

//reducers
import auth from './auth';
import user from './user';

const rootReducer = combineReducers({
  auth,
  user,
});

export default (state, action) =>
  rootReducer(action.type === 'USER_LOGOUT' ? undefined : state, action);
