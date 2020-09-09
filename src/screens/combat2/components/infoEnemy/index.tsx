import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Progress from 'react-native-progress';

import data from '../../../../data/enemys';

import styles from './styles';

export default function InfoEnemy() {
  const enemies = data;
  const chosenEnemy = Math.floor(Math.random() * enemies.length);


  return(
    <View style={styles.container}>
      <Text style={styles.title}>{enemies[chosenEnemy].name}</Text>

      <View style={styles.damageContainer}>
        <Text style={styles.text}>Dano:   {enemies[chosenEnemy].damage}</Text>
      </View>    

      <View style={styles.lifeContainer}>
        <Text style={styles.text}>Vida:</Text>
        <Progress.Bar 
          progress={1} 
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