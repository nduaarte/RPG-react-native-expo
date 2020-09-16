import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import AttributesChar from '../../../../components/attributesCharBars';

export default function AttributesListBars() {
  const maxHealth = useSelector(state => state.infoBarsReducer.maxHealth);
  const currentHealth = useSelector(state => state.infoBarsReducer.currentHealth);
  const maxMana = useSelector(state => state.infoBarsReducer.maxMana);
  const currentMana = useSelector(state => state.infoBarsReducer.currentMana);
  const maxDexterity = useSelector(state => state.infoBarsReducer.maxDexterity);
  const currentDexterity = useSelector(state => state.infoBarsReducer.currentDexterity);

  return(
    <View>
      <AttributesChar 
        attributeName='Vida'
        color='#CC1F1F' 
        currentValue={currentHealth} 
        totalValue={maxHealth}   
      />

      <AttributesChar 
        attributeName='Mana'
        color='#5185C1' 
        currentValue={currentMana} 
        totalValue={maxMana}      
      />

      <AttributesChar 
        attributeName='Estamina'
        color='#60AE31' 
        currentValue={currentDexterity} 
        totalValue={maxDexterity}      
      />

      <AttributesChar 
        attributeName='Experiência'
        color='#8ABDBD' 
        currentValue={23} 
        totalValue={60}      
      />
    </View>
  );
}