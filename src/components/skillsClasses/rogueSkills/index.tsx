import React from 'react';
import { View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import icon from '../../../assets/images/skills/dagger.png';

import styles from './styles';

export default function vrau() {
  const dispatch = useDispatch();
  const currentMana = useSelector(state => state.infoBarsReducer.currentMana);
  const currentHealthEnemy = useSelector(state => state.currentEnemyInfoReducer.currentLife);
  const maxHealthEnemy = useSelector(state => state.currentEnemyInfoReducer.maxLife);
  const manaCost = 3;
  const healthEnemyPercetage = 45;
  const probabilityToUseHability = 70;

  function calculateHitProbability() {
    let randomNumber = Math.floor(Math.random() * 100);

    if(randomNumber <= probabilityToUseHability) {
      return true;
    } else {
      return false;
    }
  }

  function sneakAttack() {
    // Quando a vida do inimigo for menor ou igual a 45%, poderá executar a habilidade.
    if(currentHealthEnemy <= (healthEnemyPercetage / 100) * maxHealthEnemy) {
      if(calculateHitProbability()) 
        dispatch({ type: 'UPDATE_CURRENTLIFE_ENEMY', value: 0 });

      dispatch({ type: 'UPDATE_ENEMY_ATTACK_CHECK', value: true });
      dispatch({ type: 'UPDATE_CURRENTMANA', value: currentMana - manaCost });
    }
  }

  return(
    <View style={styles.container}>
      <RectButton style={styles.buttonHability} onPress={() => sneakAttack()}>
        <Image style={styles.icon} source={icon} />
      </RectButton>
    </View>
  );
}