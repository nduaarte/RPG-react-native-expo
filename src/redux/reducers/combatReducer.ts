export function actionUpdateBiome(value: string) {
  return { type: 'UPDATE_BIOME_IMAGE', value };
};

export function actionUpdateDice(value: number) {
  return { type: 'UPDATE_VALUEDICE', value };
};

const INITIAL_STATE = {
  biomeImageName: '',
  valueDice: 0
}

function imageCombatBGReducer(state = INITIAL_STATE, action: { type: any; biome: any; value: number }) {
  switch(action.type) {
    case 'UPDATE_BIOME_IMAGE':
      return { ...state, biomeImageName: action.biome }
    case 'UPDATE_VALUEDICE':
      return { ...state, valueDice: action.value }
    default:
      return state;
  }
};

export default imageCombatBGReducer;