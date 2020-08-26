import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import Attributes from '../../../../components/attributes';

import styles from './styles';

export default function AttributeList() {
  const power = useSelector(state => state.attributesReducer.power);
  const dexterity = useSelector(state => state.attributesReducer.dexterity);
  const constitution = useSelector(state => state.attributesReducer.constitution);
  const intelligence = useSelector(state => state.attributesReducer.intelligence);
  const charisma = useSelector(state => state.attributesReducer.charisma);
  const [pointsLeft, setPointsLeft] = useState(50);

  var pointsUsed = power + dexterity + constitution + intelligence + charisma;
  
  useEffect(() => {
    setPointsLeft(pointsLeft => pointsLeft -= pointsUsed);
  }, [power, dexterity, constitution, intelligence, charisma]);
    
  return(
    <View style={styles.container}>
      <Attributes name='Força' color='#980D0D' />
      <Attributes name='Inteligência' color='#0D97AA' />
      <Attributes name='Destreza' color='#329419' />
      <Attributes name='Constituição' color='#B1A215' />
      <Attributes name='Carisma' color='#841F8D' />

      <View style={styles.pointsLeftContainer}>
        <Text style={styles.pointsText}>Pontos Totais:</Text>
        <Text style={styles.pointsLeft}>{pointsLeft}</Text> 
      </View>   
    </View>
  );
}