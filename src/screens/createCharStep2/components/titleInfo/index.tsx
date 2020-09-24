import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';

export default function TitleInfo() {
  const breedChar = useSelector(state => state.infoCharacterReducer.breed);
  const classChar = useSelector(state => state.infoCharacterReducer.class);

  return(
    <View style={styles.container}>
      <Text style={styles.class}>{classChar}</Text>
      <Text style={styles.breed}>{breedChar}</Text>
    </View>
  );
}