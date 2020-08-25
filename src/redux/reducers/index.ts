import { combineReducers } from 'redux';

import { attributesReducer } from './attributesReducer';

export const Reducers = combineReducers({
  attributes: attributesReducer,
  
});