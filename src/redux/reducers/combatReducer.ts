export function actionUpdateBiome(value: string) {
  return { type: 'UPDATE_BIOME_IMAGE', value };
};

export function actionUpdateDice(value: number) {
  return { type: 'UPDATE_VALUEDICE', value };
};

export function actionUpdateAfterAttack(value: number) {
  return { type: 'UPDATE_AFTERATTACK', value };
};

export function actionUpdateEnemyAttack(value: number) {
  return { type: 'UPDATE_ENEMY_ATTACK_CHECK', value };
};

const INITIAL_STATE = {
  biomeImageName: '',
  valueDice: 0,
  afterAttack: 0,
  enemyAttackCheck: false,
}

function combatReducer(state = INITIAL_STATE, action: { type: any; biome: any; value: any; }) {
  switch(action.type) {
    case 'UPDATE_BIOME_IMAGE':
      return { ...state, biomeImageName: action.biome }
    case 'UPDATE_VALUEDICE':
      return { ...state, valueDice: action.value }
    case 'UPDATE_AFTERATTACK':
      return { ...state, afterAttack: action.value }
    case 'UPDATE_ENEMY_ATTACK_CHECK':
      return { ...state, enemyAttackCheck: action.value }
    default:
      return state;
  }
};

export default combatReducer;