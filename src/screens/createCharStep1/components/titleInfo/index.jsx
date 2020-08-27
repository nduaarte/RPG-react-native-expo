import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';

export default function TitleInfo() {
  const charClass = useSelector(state => state.infoCharacterReducer.class);
  const charBreed = useSelector(state => state.infoCharacterReducer.breed);


  return(
    <View style={styles.container}>
      <Text style={styles.class}>{charClass}</Text>
      <Text style={styles.breed}>{charBreed}</Text>
    </View>
  );
}