import React from 'react';
import { View, Image, Text } from 'react-native';
import { useSelector } from 'react-redux';

import avatar from '../../../../assets/images/breeds/elf.png';
import gold from '../../../../assets/images/gold.png';

import AttributesChar from '../../../../components/attributesCharBars';

import styles from './styles';

export default function InfoChar() {
  const breedChar = useSelector(state => state.infoCharacterReducer.breed);
  const classChar = useSelector(state => state.infoCharacterReducer.class);

  const maxHealth = useSelector(state => state.infoBarsReducer.maxHealth);
  const currentHealth = useSelector(state => state.infoBarsReducer.currentHealth);
  const maxMana = useSelector(state => state.infoBarsReducer.maxMana);
  const currentMana = useSelector(state => state.infoBarsReducer.currentMana);
  const maxStamina = useSelector(state => state.infoBarsReducer.maxStamina);
  const currentStamina = useSelector(state => state.infoBarsReducer.currentStamina);

  return(
    <View style={styles.container}>
      <View style={styles.firstInfo}>
        <Image style={styles.avatar} source={avatar} />
      
        <View style={styles.align}>
          <Text style={styles.classText}>{classChar}</Text>
          <Text style={styles.breedText}>{breedChar}</Text>
        </View>

        <View style={styles.align}>
          <Text style={styles.goldText}>444</Text>
          <Image style={styles.imageGold} source={gold} />
        </View>   
      </View>

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
      </View>     
    </View>
  );
}