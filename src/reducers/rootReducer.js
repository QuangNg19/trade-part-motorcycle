import { combineReducers } from 'redux';
import getListUserReducer from './getListUserReducer';
import getUserByIdReducer from './getUserByIdReducer';


const rootReducer = combineReducers({
  getListUser: getListUserReducer,
  getUsrById: getUserByIdReducer
});

export default rootReducer;