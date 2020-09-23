import { combineReducers } from 'redux';
import infoCharacterReducer from './infoCharacterReducer';
import attributesReducer from './attributesReducer';
import imageCombatBGReducer from './imageCombatBGReducer';
import infoBarsReducer from './infoBarsReducer';
import currentEnemyInfoReducer from './currentEnemyInfoReducer';

export const Reducers = combineReducers({
  attributesReducer: attributesReducer,
  infoCharacterReducer: infoCharacterReducer,
  imageCombatBGReducer: imageCombatBGReducer,
  infoBarsReducer: infoBarsReducer,
  currentEnemyInfoReducer: currentEnemyInfoReducer
});