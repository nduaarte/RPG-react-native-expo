import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';

export default function () {
  return(
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>
          <FontAwesome name='circle' color='#7C1616' />
          {' '}Força
        </Text>
        <Text style={styles.text}>11</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>
          <FontAwesome name='circle' color='#10A8BD' />
          {' '}Inteligência
        </Text>
        <Text style={styles.text}>11</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>
          <FontAwesome name='circle' color='#278210' />
          {' '}Destreza
        </Text>
        <Text style={styles.text}>11</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>
          <FontAwesome name='circle' color='#AF9F0D' />
          {' '}Constituição
        </Text>
        <Text style={styles.text}>11</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>
          <FontAwesome name='circle' color='#7F2387' />
          {' '}Carisma
        </Text>
        <Text style={styles.text}>11</Text>
      </View>
    </View>
  );
}