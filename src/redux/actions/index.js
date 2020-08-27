export function actionUpdateAttributePower(value) {
  return { type: 'UPDATE_POWER', value };
};

export function actionUpdateAttributeDexterity(value) {
  return { type: 'UPDATE_DEXTERITY', value };
};

export function actionUpdateAttributeConstitution(value) {
  return { type: 'UPDATE_CONSTITUTION', value };
};

export function actionUpdateAttributeIntelligence(value) {
  return { type: 'UPDATE_INTELLIGENCE', value };
};

export function actionUpdateAttributeCharisma(value) {
  return { type: 'UPDATE_CHARISMA', value };
};



export function characterName(value) {
  return { type: 'CHARACTER_NAME', value };
};

export function characterClass(value) {
  return { type: 'CHARACTER_CLASS', value };
};

export function characterBreed(value) {
  return { type: 'CHARACTER_BREED', value };
};

