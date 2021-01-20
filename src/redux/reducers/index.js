import {combineReducers} from 'redux';

//reducers
import auth from './auth';

const rootReducer = combineReducers({
  auth,
});

export default (state, action) =>
  rootReducer(action.type === 'USER_LOGOUT' ? undefined : state, action);
