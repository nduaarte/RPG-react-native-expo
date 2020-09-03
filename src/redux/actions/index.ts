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



export function characterCreate(value: boolean) {
  return { type: 'CHARACTER_CREATE', value }
};


export function characterBreed(value: string) {
  return { type: 'CHARACTER_BREED', value };
};

export function characterClass(value: string) {
  return { type: 'CHARACTER_CLASS', value };
};