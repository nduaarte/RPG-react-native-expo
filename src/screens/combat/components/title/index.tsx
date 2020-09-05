import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Title() {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Escolha seu bioma atual</Text>
    </View>
  );
}