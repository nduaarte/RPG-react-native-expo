import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 

import styles from './styles';

export default function BarCreateChar() {
  return(
    <View style={styles.container}>
      <View style={styles.stepPins}>
        <FontAwesome style={[styles.pins, styles.current]} name='circle' size={13} />
        <FontAwesome style={styles.pins} name='circle' size={13} />
        <FontAwesome style={styles.pins} name='circle' size={13} />
      </View>
      <TouchableOpacity>
        <FontAwesome5 style={styles.arrow} name='long-arrow-alt-right' size={40} />
      </TouchableOpacity>
    </View>
  );
}