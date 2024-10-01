import { combineReducers } from 'redux';
import userInfoSlice from './\bslices/userInfoSlice';

const rootReducer = combineReducers({
  userInfo: userInfoSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
