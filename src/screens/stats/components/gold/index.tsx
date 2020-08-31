import React from 'react';
import { View, Image, Text } from 'react-native';

import goldImg from '../../../../assets/images/gold.png'

import styles from './styles';

export default function Gold() {
  return(
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.image} source={goldImg} />
        <Text style={styles.text}>Ouro:</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>683</Text>
      </View>    
    </View>
  );
}