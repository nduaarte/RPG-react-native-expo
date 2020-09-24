import { combineReducers } from 'redux';
import infoCharacterReducer from './infoCharacterReducer';
import attributesReducer from './attributesReducer';
import combatReducer from './combatReducer';
import infoBarsReducer from './infoBarsReducer';
import currentEnemyInfoReducer from './currentEnemyInfoReducer';

export const Reducers = combineReducers({
  attributesReducer: attributesReducer,
  infoCharacterReducer: infoCharacterReducer,
  combatReducer: combatReducer,
  infoBarsReducer: infoBarsReducer,
  currentEnemyInfoReducer: currentEnemyInfoReducer
});