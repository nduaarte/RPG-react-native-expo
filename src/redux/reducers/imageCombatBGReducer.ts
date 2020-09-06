const INITIAL_STATE = {
  biomeImageName: ''
}

function imageCombatBGReducer(state = INITIAL_STATE, action: { type: any; biome: any; }) {
  switch(action.type) {
    case 'UPDATE_BIOME_IMAGE':
      return { ...state, biomeImageName: action.biome }
    default:
      return state;
  }
};

export default imageCombatBGReducer;