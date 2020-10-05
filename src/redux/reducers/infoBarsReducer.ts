export function actionUpdateMaxHealth(value: number) {
  return { type: 'UPDATE_MAXHEALTH', value };
};

export function actionUpdateCurrentHealth(value: number) {
  return { type: 'UPDATE_CURRENTHEALTH', value };
};

export function actionUpdateMaxMana(value: number) {
  return { type: 'UPDATE_MAXMANA', value };
};

export function actionUpdateCurrentMana(value: number) {
  return { type: 'UPDATE_CURRENTMANA', value };
};

export function actionUpdateMaxDexterity(value: number) {
  return { type: 'UPDATE_MAXSTAMINA', value };
};

export function actionUpdateCurrentDexterity(value: number) {
  return { type: 'UPDATE_CURRENTSTAMINA', value };
};

export function actionUpdateMaxExp(value: number) {
  return { type: 'UPDATE_MAXEXP', value };
};

export function actionUpdateCurrentExp(value: number) {
  return { type: 'UPDATE_CURRENTEXP', value };
};

const INITIAL_STATE = {
  maxHealth: 20,
  currentHealth: 20,
  maxMana: 20,
  currentMana: 20,
  maxStamina: 20,
  currentStamina: 20,
  maxExp: 0,
  currentExp: 0
}

function infoBarsReducer(state = INITIAL_STATE, action: { type: any; value: any; }) {
  switch(action.type) {
    case 'UPDATE_MAXHEALTH':
      return { ...state, maxHealth: action.value };
    case 'UPDATE_CURRENTHEALTH':
      return { ...state, currentHealth: action.value };
    case 'UPDATE_MAXMANA':
      return { ...state, maxMana: action.value };
    case 'UPDATE_CURRENTMANA':
      return { ...state, currentMana: action.value };
    case 'UPDATE_MAXSTAMINA':
      return { ...state, maxStamina: action.value };
    case 'UPDATE_CURRENTSTAMINA':
      return { ...state, currentStamina: action.value };
    case 'UPDATE_MAXEXP':
      return { ...state, maxExp: action.value };
    case 'UPDATE_CURRENTEXP':
      return { ...state, currentExp: action.value };
    default:
      return state;
  }
};

export default infoBarsReducer;