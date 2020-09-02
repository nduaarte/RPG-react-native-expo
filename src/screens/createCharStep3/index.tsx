import React from 'react';
import { View, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import BarCreateChar from '../../components/barCreateChar';

import styles from './styles';

export default function CreateCharStep3() {
  return(
    <View style={styles.container}>
      <ScrollView>
        <FontAwesome5 name='check' size={50} color={#17B026} />
      </ScrollView>
      <BarCreateChar />
    </View>
  );
}