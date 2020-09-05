import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

export default function Biome(props) {
  return(
    <View style={styles.container}>
      <View style={styles.biomeButton}>
        <Image style={styles.image} source={props.icon} />
        <Text style={styles.text}></Text>
      </View>
    </View>
  );
}