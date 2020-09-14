import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux';

import forest from '../../../../data/enemies/forest';
import allBiomes from '../../../../data/enemies/allBiomes';

import styles from './styles';

export default function InfoEnemy() {
  const biome = useSelector(state => state.imageCombatBGReducer.biomeImageName);
  let currentBiome = forest;
  let chosenEnemy = 0;

  console.log(`${biome} foi o bioma escolhido`);
  
  if(biome === 'Floresta') currentBiome = forest;

  chosenEnemy = Math.floor(Math.random() * currentBiome.length);
  console.log(currentBiome[chosenEnemy].name);

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{currentBiome[chosenEnemy].name}</Text>

      <View style={styles.damageContainer}>
        <Text style={styles.text}>Dano:   {currentBiome[chosenEnemy].damage}</Text>
      </View>    

      <View style={styles.lifeContainer}>
        <Text style={styles.textLife}>Vida: {currentBiome[chosenEnemy].life}</Text>
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