import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import BarCreateChar from '../../components/barCreateChar';

import styles from './styles';

export default function CreateCharStep3() {
  return(
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.itens}>
          <FontAwesome5 name='check' size={75} color='#519918' />
          <Text style={styles.text}>Personagem</Text>
          <Text style={styles.text}>Concluído!</Text>
        </View>      
      </ScrollView>
      <BarCreateChar thirdStep='#3E8BFF' navigate='Landing' />
    </View>
  );
}