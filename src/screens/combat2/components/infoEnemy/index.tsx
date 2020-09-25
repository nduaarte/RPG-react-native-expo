import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux';

import styles from './styles';

export default function InfoEnemy() {
  const enemyName = useSelector(state => state.currentEnemyInfoReducer.name);
  const enemyMaxLife = useSelector(state => state.currentEnemyInfoReducer.maxLife);
  const enemyCurrentLife = useSelector(state => state.currentEnemyInfoReducer.currentLife);
  const enemyDamage = useSelector(state => state.currentEnemyInfoReducer.damage);

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{enemyName}</Text>

      <View style={styles.damageContainer}>
        <Text style={styles.text}>Dano:   {enemyDamage}</Text>
      </View>    

      <View style={styles.lifeContainer}>
        <Text style={styles.textLife}>Vida: {enemyCurrentLife}/{enemyMaxLife}</Text>
        <Progress.Bar 
          progress={enemyCurrentLife/10}
          color='#CC1F1F' 
          borderRadius={2} 
          borderColor='#fff'
          height={20}
          width={270}
        />
      </View>
    </View>
  );
}