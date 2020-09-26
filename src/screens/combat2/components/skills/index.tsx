import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import habilityImg from '../../../../assets/images/skills/summon.png';
import defaultAttackImg from '../../../../assets/images/skills/default-attack.png';

import styles from './styles';

export default function Skills() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const valueDice = useSelector(state => state.combatReducer.valueDice);
  const dexterity = useSelector(state => state.attributesReducer.dexterity);

  const enemyName = useSelector(state => state.currentEnemyInfoReducer.name);
  const enemyMaxLife = useSelector(state => state.currentEnemyInfoReducer.maxLife);
  const enemyCurrentLife = useSelector(state => state.currentEnemyInfoReducer.currentLife);
  const enemyDamage = useSelector(state => state.currentEnemyInfoReducer.damage);
  const enemyArmor = useSelector(state => state.currentEnemyInfoReducer.armor);

  function calculateModifier(attribute: number) {
    let less = 3.5;
    if(attribute % 2 === 0)
      less = 3;
    return (attribute / 2) - less;
  }
  
  function calculateDamage(attribute: number) {
    return valueDice + calculateModifier(attribute);    
  }

  function calculateDefense(armor: number, life: number) {
    return armor + life;
  }

  function afterAttack(attribute: number, armor: number) {
    return attribute - armor;
  }

  function attack() {
    let resultAttack =  calculateDefense(enemyArmor, enemyCurrentLife) - calculateDamage(dexterity);
    dispatch({ type: 'UPDATE_CURRENTLIFE_ENEMY', value: resultAttack });
    dispatch({ type: 'UPDATE_AFTERATTACK', value: afterAttack(dexterity, enemyArmor) });
  }

  return(
    <View style={styles.container}>
      <RectButton style={styles.buttonHability}>
        <Image style={styles.image} source={habilityImg} />
      </RectButton>

      <RectButton style={styles.buttonDefaultAttack} onPress={() => attack()}>
        <Image style={styles.image} source={defaultAttackImg} />
      </RectButton>
    </View>
  );
}