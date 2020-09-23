export function actionUpdateNameEnemy(value: number) {
  return { type: 'UPDATE_NAME_ENEMY', value }
};

export function actionUpdateMaxLifeEnemy(value: number) {
  return { type: 'UPDATE_MAXLIFE_ENEMY', value }
};

export function actionUpdateCurrentLifeEnemy(value: number) {
  return { type: 'UPDATE_CURRENTLIFE_ENEMY', value }
};

export function actionUpdateDamageEnemy(value: number) {
  return { type: 'UPDATE_DAMAGE_ENEMY', value }
};

export function actionUpdateArmorEnemy(value: number) {
  return { type: 'UPDATE_ARMOR_ENEMY', value }
};

const INITIAL_STATE = {
  name: '',
  maxLife: 0,
  currentLife: 0,
  damage: 0,
  armor: 0,
};

function currentEnemyInfoReducer(state = INITIAL_STATE, action: { type: any; value: any; }) {
  switch(action.type) {
    case 'UPDATE_NAME_ENEMY':
      return { ...state, name: action.value };
    case 'UPDATE_MAXLIFE_ENEMY':
      return { ...state, maxLife: action.value };
    case 'UPDATE_CURRENTLIFE_ENEMY':
      return { ...state, currentLife: action.value };
    case 'UPDATE_DAMAGE_ENEMY':
      return { ...state, damage: action.value };
    case 'UPDATE_ARMOR_ENEMY':
      return { ...state, armor: action.value };
    default:
      return state;
  }
};
export default currentEnemyInfoReducer;
