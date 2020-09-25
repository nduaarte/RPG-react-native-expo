import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import Img from '../../../../assets/images/userLogCombat.png';

import styles from './styles';

export default function CombatLog() {
  return(
    <ImageBackground style={styles.container} resizeMode='stretch' source={Img}>
      <Text style={styles.title}>Registro do Combate</Text>
      <View>
        <Text style={styles.text}>Você causou {} de Dano!!</Text>
      </View>
    </ImageBackground>
  );
}