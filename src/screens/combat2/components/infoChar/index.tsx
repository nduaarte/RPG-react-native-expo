import React, { useEffect, useRef } from 'react';
import { View, Image, Text, InteractionManager } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';

import avatar from '../../../../assets/images/breeds/elf.png';
import gold from '../../../../assets/images/gold.png';

import AttributesChar from '../../../../components/attributesCharBars';

import styles from './styles';

export default function InfoChar() {
  const dispatch = useDispatch()
  const breedChar = useSelector(state => state.infoCharacterReducer.breed);
  const classChar = useSelector(state => state.infoCharacterReducer.class);
  const maxHealth = useSelector(state => state.infoBarsReducer.maxHealth);
  const currentHealth = useSelector(state => state.infoBarsReducer.currentHealth);
  const maxMana = useSelector(state => state.infoBarsReducer.maxMana);
  const currentMana = useSelector(state => state.infoBarsReducer.currentMana);
  const maxStamina = useSelector(state => state.infoBarsReducer.maxStamina);
  const currentStamina = useSelector(state => state.infoBarsReducer.currentStamina);

  const enemyAttackCheck = useSelector(state => state.combatReducer.enemyAttackCheck);
  const enemyDamage = useSelector(state => state.currentEnemyInfoReducer.damage);

  const animatableRefAvatar = useRef<Animatable.Image & Image>(null); // Code tirado do github.
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      if(enemyAttackCheck) {
        animatableRefAvatar.current.swing();
        dispatch({ type: 'UPDATE_CURRENTHEALTH', value: currentHealth - enemyDamage });
        dispatch({ type: 'UPDATE_ENEMY_ATTACK_CHECK', value: false });
      }
    });
  }, [enemyAttackCheck]);

  return(
    <Animatable.View 
      style={styles.container}
      duration={750}
      ref={animatableRefAvatar}>

      <View style={styles.firstInfo}>
        <Animatable.Image style={styles.avatar} source={avatar} />
        <View style={styles.align}>
          <Text style={styles.classText}>{classChar}</Text>
          <Text style={styles.breedText}>{breedChar}</Text>
        </View>

        <View style={styles.align}>
          <Text style={styles.goldText}>444</Text>
          <Image style={styles.imageGold} resizeMode='center' source={gold} />
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
    </Animatable.View>
  );
}