import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, TouchableOpacity, hairline } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import ImageBg from '../../assets/gifs/pixel.gif';

import styles from './styles';

export default function Landing() {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <Image style={styles.image} source={ImageBg} />
      
      <TouchableOpacity onPress={() => navigation.navigate('EquipCharTab')}>
        <Text style={styles.text}>Iniciar Jogo</Text>
      </TouchableOpacity>

      <View style={styles.line} />

      <TouchableOpacity onPress={() => navigation.navigate('CreateCharStep1')}>
        <Text style={styles.text2}>Criar Personagem</Text>
      </TouchableOpacity>
      <StatusBar style='light' />
    </View>
  );
}