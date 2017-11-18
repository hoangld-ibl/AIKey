// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import newKeys from './keys-reducer';

const rootReducer = combineReducers({
  newKeys,
  router,
});

export default rootReducer;
