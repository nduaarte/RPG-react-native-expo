import React from 'react';
import { View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux'

import icon from '../../../assets/images/skills/heal.png'

import styles from './styles';

export default function MageSkills() {
  const dispatch = useDispatch()
  const maxHealth = useSelector(state => state.infoBarsReducer.maxHealth);
  const currentHealth = useSelector(state => state.infoBarsReducer.currentHealth);
  const currentMana = useSelector(state => state.infoBarsReducer.currentMana);
  const healPercetage = 30; // Valor usado como porcentagem (exemplo: 30%).
  const manaCost = 5;

  function calculateHealing() {
    if(currentMana > manaCost) {
      const healValue = (maxHealth * healPercetage) / 100; 

      if(currentHealth + healValue <= maxHealth) {
        dispatch({ type: 'UPDATE_CURRENTHEALTH', value: currentHealth + healValue });
      } else {
        dispatch({ type: 'UPDATE_CURRENTHEALTH', value: maxHealth });
      }
      dispatch({ type: 'UPDATE_CURRENTMANA', value: currentMana - manaCost });
    }
  }

  return(
    <View style={styles.container}>
      <RectButton style={styles.buttonHability} onPress={() => calculateHealing()}>
        <Image style={styles.icon} source={icon} />
      </RectButton>
    </View>
  );
}