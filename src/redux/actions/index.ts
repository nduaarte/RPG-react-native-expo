export function actionUpdateAttributePower(value: number) {
  return { type: 'UPDATE_POWER', value };
};

export function actionUpdateAttributeDexterity(value: number) {
  return { type: 'UPDATE_DEXTERITY', value };
};

export function actionUpdateAttributeConstitution(value: number) {
  return { type: 'UPDATE_CONSTITUTION', value };
};

export function actionUpdateAttributeIntelligence(value: number) {
  return { type: 'UPDATE_INTELLIGENCE', value };
};

export function actionUpdateAttributeCharisma(value: number) {
  return { type: 'UPDATE_CHARISMA', value };
};

export function actionUpdateAttributePoints(value: number) {
  return { type: 'UPDATE_POINTS', value };
};



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



export function characterCreate(value: boolean) {
  return { type: 'CHARACTER_CREATE', value }
};

export function characterBreed(value: string) {
  return { type: 'CHARACTER_BREED', value };
};

export function characterClass(value: string) {
  return { type: 'CHARACTER_CLASS', value };
};



export function actionUpdateBiome(value: string) {
  return { type: 'UPDATE_BIOME_IMAGE', value };
};