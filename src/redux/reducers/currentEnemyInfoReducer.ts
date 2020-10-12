const INITIAL_STATE = {
  name: '',
  maxLife: 0,
  currentLife: 1,
  damage: 0,
  armor: 0,
  image: '',
  item: '',
  gold: 0,
  xp: 0
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
    case 'UPDATE_IMAGE_ENEMY':
      return { ...state, image: action.value };
    case 'UPDATE_ITEM_ENEMY':
      return { ...state, item: action.value };
    case 'UPDATE_GOLD_ENEMY':
      return { ...state, gold: action.value };
    case 'UPDATE_XP_ENEMY':
      return { ...state, xp: action.value };
    default:
      return state;
  }
};
export default currentEnemyInfoReducer;


export function actionUpdateNameEnemy(value: number) {
  return { type: 'UPDATE_NAME_ENEMY', value };
};

export function actionUpdateMaxLifeEnemy(value: number) {
  return { type: 'UPDATE_MAXLIFE_ENEMY', value };
};

export function actionUpdateCurrentLifeEnemy(value: number) {
  return { type: 'UPDATE_CURRENTLIFE_ENEMY', value };
};

export function actionUpdateDamageEnemy(value: number) {
  return { type: 'UPDATE_DAMAGE_ENEMY', value };
};

export function actionUpdateArmorEnemy(value: number) {
  return { type: 'UPDATE_ARMOR_ENEMY', value };
};

export function actionUpdateImageEnemy(value: number) {
  return { type: 'UPDATE_IMAGE_ENEMY', value };
};

export function actionUpdateItemEnemy(value: number) {
  return { type: 'UPDATE_ITEM_ENEMY', value };
};

export function actionUpdateGoldEnemy(value: number) {
  return { type: 'UPDATE_GOLD_ENEMY', value };
};

export function actionUpdateXPEnemy(value: number) {
  return { type: 'UPDATE_XP_ENEMY', value };
};