import { combineReducers } from 'redux';
import infoCharacterReducer from './infoCharacterReducer';
import attributesReducer from './attributesReducer';

export const Reducers = combineReducers({
  attributesReducer: attributesReducer,
  infoCharacterReducer: infoCharacterReducer
});