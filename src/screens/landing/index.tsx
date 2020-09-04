import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';

import ImageBg from '../../assets/gifs/pixel.gif';

import styles from './styles';

export default function Landing() {
  const navigation = useNavigation();
  const createdChar = useSelector(state => state.infoCharacterReducer.create);

  function checkToCreateChar() {
    if(!createdChar) 
      return navigation.navigate('CreateCharStep1');
    else {
      Alert.alert(
        'Personagem Existente',
        'Ao terminar a criação do novo personagem, o atual será excluído.',
        [
          {
            text: 'Cancelar',
            style: 'cancel'
          },
          {
            text: 'Continuar',
            onPress: () => navigation.navigate('CreateCharStep1'),
          }
        ]
      );
    }
  }

  function checkToStartGame() {
    if(createdChar)
      return navigation.navigate('EquipCharTab');
    else {
      Alert.alert(
        'Personagem Inexistente', 
        'Crie um personagem para iniciar o jogo.'
      );
    }
  }

  return(
    <View style={styles.container}>
      <Image style={styles.image} source={ImageBg} />
      
      <TouchableOpacity onPress={checkToStartGame}>
        <Text style={styles.text}>Iniciar Jogo</Text>
      </TouchableOpacity>

      <View style={styles.line} />

      <TouchableOpacity onPress={checkToCreateChar}>
        <Text style={styles.text2}>Criar Personagem</Text>
      </TouchableOpacity>
      <StatusBar style='light' />
    </View>
  );
}