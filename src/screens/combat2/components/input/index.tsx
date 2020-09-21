import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';

export default function Input() {
  return(
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        keyboardType='number-pad' 
        placeholder='Insira o valor do dado..'
        clearButtonMode='always'
        keyboardAppearance='dark'
        maxLength={2}
        returnKeyType='done'
      />
    </View>
  );
}