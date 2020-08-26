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
    setPointsLeft(50);
    setPointsLeft(pointsLeft => pointsLeft -= pointsUsed);
  }, [power, dexterity, constitution, intelligence, charisma]);
    
  return(
    <View style={styles.container}>
      <Attributes name='Força' actionAttribute='UPDATE_POWER' color='#980D0D' />
      <Attributes name='Inteligência' actionAttribute='UPDATE_INTELLIGENCE' color='#0D97AA' />
      <Attributes name='Destreza' actionAttribute='UPDATE_DEXTERITY' color='#329419' />
      <Attributes name='Constituição' actionAttribute='UPDATE_CONSTITUTION' color='#B1A215' />
      <Attributes name='Carisma' actionAttribute='UPDATE_CHARISMA' color='#841F8D' />

      <View style={styles.pointsLeftContainer}>
        <Text style={styles.pointsText}>Pontos Totais:</Text>
        <Text style={styles.pointsLeft}>{pointsLeft}</Text> 
      </View>   
    </View>
  );
}