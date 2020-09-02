export function actionUpdateAttributePower(value: any) {
  return { type: 'UPDATE_POWER', value };
};

export function actionUpdateAttributeDexterity(value: any) {
  return { type: 'UPDATE_DEXTERITY', value };
};

export function actionUpdateAttributeConstitution(value: any) {
  return { type: 'UPDATE_CONSTITUTION', value };
};

export function actionUpdateAttributeIntelligence(value: any) {
  return { type: 'UPDATE_INTELLIGENCE', value };
};

export function actionUpdateAttributeCharisma(value: any) {
  return { type: 'UPDATE_CHARISMA', value };
};



export function characterCreate(value: any) {
  return { type: 'CHARACTER_CREATE', value }
};

export function characterName(value: any) {
  return { type: 'CHARACTER_NAME', value };
};

export function characterBreed(value: any) {
  return { type: 'CHARACTER_BREED', value };
};

export function characterClass(value: any) {
  return { type: 'CHARACTER_CLASS', value };
};