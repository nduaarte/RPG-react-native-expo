import {
  UPDATE_POWER, 
  UPDATE_DEXTERITY
} from '../actions/acstionsTypes';

const initialState = {
  power: 0,
  dexterity: 0,
  constitution: 0,
  intelligence: 0,
  charisma: 0
};

export const attributesReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_POWER:
      return {
        ...state,
        power: action.power
      };

    case UPDATE_DEXTERITY:
      return {
        ...state,
        dexterity: action.dexterity
      };

    default:
      return state;
  }
};