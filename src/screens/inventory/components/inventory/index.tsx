import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Slots() {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Equipamento</Text>
      <View style={styles.equipContainer}>
        <View style={styles.allSlotsContainer}>
          <Text style={styles.text}>Colar</Text>
          <View style={styles.boxSlot} />

          <Text style={[styles.text, styles.ajustLowSlot]}>Esquerda</Text>
          <View style={styles.boxSlot} />
        </View>

        <View style={styles.allSlotsContainer}>
          <Text style={styles.text}>Traje</Text>
          <View style={styles.armor} />
        </View>

        <View style={styles.allSlotsContainer}>
          <Text style={styles.text}>Anel</Text>
          <View style={styles.boxSlot} />
  
          <Text style={[styles.text, styles.ajustLowSlot]}>Direita</Text>
          <View style={styles.boxSlot} />
        </View>
      </View>

      <Text style={[styles.text, styles.ajustLowSlot]}>Poções</Text>
      <View style={styles.potionsContainer}>
        <View style={styles.inventorySlot} />
        <View style={styles.inventorySlot} />
        <View style={styles.inventorySlot} />
      </View>

      <Text style={[styles.text, styles.ajustLowSlot]}>Inventário</Text>
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