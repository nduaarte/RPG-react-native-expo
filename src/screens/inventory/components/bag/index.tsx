import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Bag() {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Inventário</Text>
      <View style={styles.inventoryContainer}>
        <View  style={styles.inventorySlot} />
        <View  style={styles.inventorySlot} />
        <View  style={styles.inventorySlot} />
        <View  style={styles.inventorySlot} />
        <View  style={styles.inventorySlot} />
        <View  style={styles.inventorySlot} />
        <View  style={styles.inventorySlot} />
        <View  style={styles.inventorySlot} />
        <View  style={styles.inventorySlot} />
      </View>
    </View>
  );
}