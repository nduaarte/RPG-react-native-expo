import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function TitleInfo() {
  return(
    <View style={styles.container}>
      <Text style={styles.class}>Necromante</Text>
      <Text style={styles.breed}>Humano</Text>
    </View>
  );
}