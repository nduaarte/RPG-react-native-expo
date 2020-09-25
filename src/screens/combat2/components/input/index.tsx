import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import { useDispatch } from 'react-redux';

import styles from './styles';

export default function Input() {
  const dispatch = useDispatch();
  const [valueDice, setValueDice] = useState(Number);

  useEffect(() => {
    dispatch({ type: 'UPDATE_VALUEDICE', value: valueDice });
  }, [valueDice]);

  return(
    <View style={styles.container}>
      <NumericInput 
        onChange={value => setValueDice(value)}
        maxValue={8}
        minValue={1}
        totalWidth={180}
        totalHeight={55}
        initValue={1}
        type='up-down'
        rounded
      />
    </View>
  );
}