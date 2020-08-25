const INITIAL_STATE = {
  power: 0,
  dexterity: 0,
  constitution: 0,
  intelligence: 0,
  charisma: 0
};


export default function attributesReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'UPDATE_POWER':
      return { ...state, power: action.power };
    case 'UPDATE_DEXTERITY':
      return { ...state, dexterity: action.dexterity };
    case 'UPDATE_CONSTITUTION':
      return { ...state, constitution: action.constitution };
    case 'UPDATE_INTELLIGENCE':
      return { ...state, intelligence: action.intelligence };
    case 'UPDATE_CHARISMA':
      return { ...state, charisma: action.charisma };
    default:
      return state;
  }
}