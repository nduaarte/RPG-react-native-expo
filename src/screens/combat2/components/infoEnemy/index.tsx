import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux';

import data from '../../../../data/enemies';

import styles from './styles';

export default function InfoEnemy() {
  const enemies = data;
  const biome = useSelector(state => state.imageCombatBGReducer.biomeImageName);
  let chosenEnemy = 0;

  useEffect(() => {
    console.log(biome);

    do() => { 
      chosenEnemy = enemies.map(value => value.biome).map(value => value === biome);
      console.log(enemies[chosenEnemy]);
    }; while (chosenEnemy != -1);
  }, []);

  // useEffect(() => {
  //   do() => {
  //     chosenEnemy = Math.floor(Math.random() * enemies.length);
  //     console.log(chosenEnemy);
  //   }; 
  //   while(
  //     enemies[chosenEnemy].biome == biome 
  //     || 
  //     enemies[chosenEnemy].biome == 'todos'
  //   );    
  // }, []);

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{enemies[chosenEnemy].name}</Text>

      <View style={styles.damageContainer}>
        <Text style={styles.text}>Dano:   {enemies[chosenEnemy].damage}</Text>
      </View>    

      <View style={styles.lifeContainer}>
        <Text style={styles.textLife}>Vida: {enemies[chosenEnemy].life}</Text>
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