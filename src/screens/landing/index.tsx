import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import ImageBg from '../../assets/gifs/pixel.gif';

import styles from './styles';

export default function Landing() {
  return(
    <View style={styles.container}>
      <Image style={styles.image} source={ImageBg} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Criar</Text>
        <Text style={styles.text}>Personagem</Text>
      </TouchableOpacity>
    </View>
  );
}