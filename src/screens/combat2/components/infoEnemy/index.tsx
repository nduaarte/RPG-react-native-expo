import React from 'react';
import { View, Text } from 'react-native';
import * as Progress from 'react-native-progress';

import styles from './styles';

export default function InfoEnemy() {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Escorpião</Text>

      <View style={styles.damageContainer}>
        <Text style={styles.text}>Dano:   32</Text>
      </View>    

      <View style={styles.lifeContainer}>
        <Text style={styles.text}>Vida:</Text>
        <Progress.Bar 
          progress={0.8} 
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