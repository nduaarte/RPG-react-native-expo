import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Potions() {
  return(
    <View style={styles.container}>
     <Text style={styles.text}>Poções</Text>
      <View style={styles.potionsContainer}>
        <View style={styles.inventorySlot} />
        <View style={styles.inventorySlot} />
        <View style={styles.inventorySlot} />
      </View>
    </View>
  );
}