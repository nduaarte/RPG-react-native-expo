const INITIAL_STATE = {
  power: 0,
  intelligence: 0,
  dexterity: 0,
  constitution: 0,
  charisma: 0,
  points: 0
};


function attributesReducer(state = INITIAL_STATE, action: { type: any; power: any; dexterity: any; constitution: any; intelligence: any; charisma: any; points: any; }) {
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
    case 'UPDATE_POINTS':
      return { ...state, points: action.points };
    default:
      return state;
  }
};

export default attributesReducer;