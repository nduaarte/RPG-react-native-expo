const INITIAL_STATE = {
  name: '',
  breed: '',
  class: '',
};

 function infoCharacterReducer(state = INITIAL_STATE, action: { type: any; name: any; breed: any; class: any; }) {
  switch(action.type) {
    case 'CHARACTER_NAME':
      return { ...state, name: action.name };
    case 'CHARACTER_BREED':
      return { ...state, breed: action.breed };
    case 'CHARACTER_CLASS':
      return { ...state, class: action.class };
    default:
      return state;
  }
};

export default infoCharacterReducer;