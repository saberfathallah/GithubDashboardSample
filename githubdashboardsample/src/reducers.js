import { combineReducers } from 'redux';
import userReducer from './Components/UserSearch/reducer';

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;