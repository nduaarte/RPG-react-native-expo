import React from 'react';
import { View } from 'react-native';

import AttributesChar from '../../../../components/attributesChar';

export default function AttributesList() {
  return(
    <View>
      <AttributesChar 
        attributeName='Vida'
        color='#CC1F1F' 
        currentValue={5} 
        totalValue={60}      
      />

      <AttributesChar 
        attributeName='Mana'
        color='#5185C1' 
        currentValue={43} 
        totalValue={60}      
      />

      <AttributesChar 
        attributeName='Estamina'
        color='#60AE31' 
        currentValue={2} 
        totalValue={60}      
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