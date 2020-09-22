import React from 'react';
import { View, Image } from 'react-native';

import Img from '../../../../assets/images/userLogCombat.png';

import styles from './styles';

export default function CombatLog() {
  return(
    <View style={styles.container}>
      <Image style={styles.image} resizeMode='stretch' source={Img} />
    </View>
  );
}