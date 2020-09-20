import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';

export default function Input() {
  return(
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        keyboardType='numeric' 
        placeholder='Insira o valor do dado' 
      />
    </View>
  );
}