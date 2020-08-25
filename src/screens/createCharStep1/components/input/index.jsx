import React from 'react';
import { View, TextInput, Text } from 'react-native';

import styles from './styles';

export default function Input() {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Nome do Personagem:</Text>
      <TextInput  style={styles.input} placeholder='Digite aqui' />
    </View>
  );
}