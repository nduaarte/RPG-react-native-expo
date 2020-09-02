import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 

import styles from './styles';
import { useSelector } from 'react-redux';

export default function BarCreateChar(props) {
  const navigation = useNavigation();
  const breedChar = useSelector(state => state.infoCharacterReducer.breed);
  const classChar = useSelector(state => state.infoCharacterReducer.class);

  const power = useSelector(state => state.attributesReducer.power);
  const intelligence = useSelector(state => state.attributesReducer.intelligence);
  const dexterity = useSelector(state => state.attributesReducer.dexterity);
  const constitution = useSelector(state => state.attributesReducer.constitution);
  const charisma = useSelector(state => state.attributesReducer.charisma);


  //NAO DEU CERTO, REFAZER!!
  if(props.screen == screen1)
    screen1()

  if(props.screen == screen1)
    screen2()

  function screen1() {
    if(breedChar != '' && classChar != '') 
      checkToNavigate(true);
    else 
      checkToNavigate(false); 
  }

  function screen2() {
    const total = power + intelligence + dexterity + constitution + charisma;
    if(total === 0) 
      checkToNavigate(true);
    else 
      checkToNavigate(false);
  }

  function checkToNavigate(boolean: boolean) {
    if(boolean)
      return navigation.navigate(props.navigate);
    else
      return Alert.alert('Algo errado', 'Verifique se está tudo correto e tente novamente.');
  }

  return(
    <View style={styles.container}>
      <View style={styles.stepPins}>
        <FontAwesome style={styles.pins} color={props.firstStep || '#fff'} name='circle' size={13} />
        <FontAwesome style={styles.pins} color={props.secondStep || '#fff'} name='circle' size={13} />
        <FontAwesome style={styles.pins} color={props.thirdStep || '#fff'} name='circle' size={13} />
      </View>
      <TouchableOpacity onPress={props.screen}>
        <FontAwesome5 color='#fff' name='long-arrow-alt-right' size={40} />
      </TouchableOpacity>
    </View>
  );
}