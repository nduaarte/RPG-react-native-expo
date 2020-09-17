import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import AttributesChar from '../../../../components/attributesCharBars';

export default function AttributesListBars() {
  const maxHealth = useSelector(state => state.infoBarsReducer.maxHealth);
  const currentHealth = useSelector(state => state.infoBarsReducer.currentHealth);
  const maxMana = useSelector(state => state.infoBarsReducer.maxMana);
  const currentMana = useSelector(state => state.infoBarsReducer.currentMana);
  const maxStamina = useSelector(state => state.infoBarsReducer.maxStamina);
  const currentStamina = useSelector(state => state.infoBarsReducer.currentStamina);

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
        currentValue={currentStamina} 
        totalValue={maxStamina}      
      />

      <AttributesChar 
        attributeName='Experiência'
        color='#8ABDBD' 
        currentValue={5} 
        totalValue={10}      
      />
    </View>
  );
}