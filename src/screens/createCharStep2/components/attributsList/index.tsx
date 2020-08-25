import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import Attributes from '../../../../components/attributes';

import styles from './styles';

export default function AttributeList() {
  const attributes = useSelector(state => state.)

  return(
    <View style={styles.container}>
      <Attributes name='Força' color='#980D0D' />
      <Attributes name='Inteligência' color='#0D97AA' />
      <Attributes name='Destreza' color='#329419' />
      <Attributes name='Constituição' color='#B1A215' />
      <Attributes name='Carisma' color='#841F8D' />

      <View style={styles.pointsLeftContainer}>
        <Text style={styles.pointsText}>Pontos Totais:</Text>
        <Text style={styles.pointsLeft}>50</Text> 
      </View>   
    </View>
  );
}