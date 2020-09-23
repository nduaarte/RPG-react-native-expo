import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux';

import styles from './styles';

export default function InfoEnemy() {
  const biome = useSelector(state => state.imageCombatBGReducer.biomeImageName);
  
  const name = useSelector(state => state.currentEnemyInfoReducer.name);
  const maxLife = useSelector(state => state.currentEnemyInfoReducer.maxLife);
  const currentLife = useSelector(state => state.currentEnemyInfoReducer.currentLife);
  const damage = useSelector(state => state.currentEnemyInfoReducer.damage);
  const armor = useSelector(state => state.currentEnemyInfoReducer.armor);

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <View style={styles.damageContainer}>
        <Text style={styles.text}>Dano:   {damage}</Text>
      </View>    

      <View style={styles.lifeContainer}>
        <Text style={styles.textLife}>Vida: {currentLife}/{maxLife}</Text>
        <Progress.Bar 
          progress={currentLife/10} 
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