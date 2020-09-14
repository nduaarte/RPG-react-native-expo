const INITIAL_STATE = {
  maxHealth: 0,
  currentHealth: 0,
  maxMana: 0,
  currentMana: 0,
  maxDexterity: 0,
  currentDexterity: 0,
  maxExp: 0,
  currentExp: 0
}

function infoBarsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'UPDATE_MAXHEALTH':
      return { ...state, maxHealth: action.value };
    case 'UPDATE_CURRENTHEALTH':
      return { ...state, currentHealth: action.value };
    case 'UPDATE_MAXMANA':
      return { ...state, maxMana: action.value };
    case 'UPDATE_CURRENTMANA':
      return { ...state, currentMana: action.value };
    case 'UPDATE_MAXDEXTERITY':
      return { ...state, maxDexterity: action.value };
    case 'UPDATE_CURRENTDEXTERITY':
      return { ...state, currentDexterity: action.value };
    case 'UPDATE_MAXEXP':
      return { ...state, maxExp: action.value };
    case 'UPDATE_CURRENTEXP':
      return { ...state, currentExp: action.value };
    default:
      return state;
  }
};

export default infoBarsReducer;