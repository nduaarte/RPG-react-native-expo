import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import styles from './styles';

export default function Biome(props) {
  const navigation = useNavigation();
  const disptach = useDispatch();

  function updateBiome() {
    disptach({ type: 'UPDATE_BIOME_IMAGE', biome: props.name });
    navigate();
  }

  function navigate() {
    return navigation.navigate('EnemyInfo');
  }
      
  return(
    <View style={styles.container}>
      <RectButton 
        style={[styles.biomeButton, {backgroundColor: props.color}]}
        onPress={() => updateBiome()}>
        <Image style={styles.image} source={props.icon} />
        <Text style={styles.text}>{props.name}</Text>
      </RectButton>
    </View>
  );
}