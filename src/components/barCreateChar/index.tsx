import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 

import styles from './styles';
import { useSelector } from 'react-redux';

export default function BarCreateChar(props) {
  const points = useSelector(state => state.attributesReducer.points);
  const breedChar = useSelector(state => state.infoCharacterReducer.breed);
  const classChar = useSelector(state => state.infoCharacterReducer.class);
  const navigation = useNavigation();

  function screen1() {
    if(breedChar != '' && classChar != '') 
      return navigation.navigate(props.navigate);
    else 
      return Alert.alert('Algo errado', 'Verifique se ecolheu uma raça e uma classe.');
  }

  function screen2() {
    if(points === 1) 
      return navigation.navigate(props.navigate);
    else 
      return Alert.alert('Algo errado', 'Verifique se usou todos os pontos disponíveis.');
  }

  function checkToNavigate(screen: string) {
    if(screen === 'CreateCharStep2') return screen1();
    if(screen === 'CreateCharStep3') return screen2();
    if(screen === 'Landing') return navigation.navigate(props.navigate);        
  }

  return(
    <View style={styles.container}>
      <View style={styles.stepPins}>
        <FontAwesome style={styles.pins} color={props.firstStep || '#fff'} name='circle' size={13} />
        <FontAwesome style={styles.pins} color={props.secondStep || '#fff'} name='circle' size={13} />
        <FontAwesome style={styles.pins} color={props.thirdStep || '#fff'} name='circle' size={13} />
      </View>
      <TouchableOpacity onPress={() => checkToNavigate(props.navigate)}>
        <FontAwesome5 color='#fff' name={props.navigate === 'Landing'? 'long-arrow-alt-left' :'long-arrow-alt-right'} size={40} />
      </TouchableOpacity>
    </View>
  );
}