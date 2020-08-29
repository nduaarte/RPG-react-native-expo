import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 

import styles from './styles';

export default function BarCreateChar(props) {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <View style={styles.stepPins}>
        <FontAwesome style={styles.pins} color={props.firstStep || '#fff'} name='circle' size={13} />
        <FontAwesome style={styles.pins} color={props.secondStep || '#fff'} name='circle' size={13} />
        <FontAwesome style={styles.pins} color={props.thirdStep || '#fff'} name='circle' size={13} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate(props.navigate)}>
        <FontAwesome5 color='#fff' name='long-arrow-alt-right' size={40} />
      </TouchableOpacity>
    </View>
  );
}