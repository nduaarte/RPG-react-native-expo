import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles';

export default function Biome(props) {
  return(
    <View style={styles.container}>
      <RectButton 
        style={[styles.biomeButton, {backgroundColor: props.color}]}>
        <Image style={styles.image} source={props.icon} />
        <Text style={styles.text}>{props.name}</Text>
      </RectButton>
    </View>
  );
}