import React, { useEffect, useState } from 'react';
import { View, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';

import styles from './styles';

export default function Input() {
  const dispatch = useDispatch();
  const [valueDice, setValueDice] = useState();

  useEffect(() => {
    dispatch({ type: 'UPDATE_VALUEDICE', value: valueDice });
  }, [valueDice]);

  return(
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        keyboardType='number-pad' 
        placeholder='Insira o valor do dado'
        clearButtonMode='always'
        keyboardAppearance='dark'
        maxLength={2}
        returnKeyType='done'
        value={valueDice}
      />
    </View>
  );
}