import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ClassBreedChar from '../../components/classBreedChar';
import AttributesListBars from './components/attributesListBars';
import AttributesListCircles from './components/attributesListCircles';

export default function Stats() {
  return(
    <View>
      <StatusBar style='dark' />
      <ClassBreedChar />
      <AttributesListBars />
      <AttributesListCircles />
    </View>
  );
}