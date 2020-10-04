export function characterCreate(value: boolean) {
  return { type: 'CHARACTER_CREATE', value }
};

export function characterBreed(value: string) {
  return { type: 'CHARACTER_BREED', value };
};

export function characterClass(value: string) {
  return { type: 'CHARACTER_CLASS', value };
};

const INITIAL_STATE = {
  create: true,
  breed: 'darkElf',
  class: 'Rogue',
};

 function infoCharacterReducer(state = INITIAL_STATE, action: { type: any; create: any; breed: any; class: any; }) {
  switch(action.type) {
    case 'CHARACTER_CREATE':
      return { ...state, create: action.create };
    case 'CHARACTER_BREED':
      return { ...state, breed: action.breed };
    case 'CHARACTER_CLASS':
      return { ...state, class: action.class };
    default:
      return state;
  }
};

export default infoCharacterReducer;