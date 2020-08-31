import React from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ClassBreedChar from '../../components/classBreedChar';
import AttributesListBars from './components/attributesListBars';
import AttributesListCircles from './components/attributesListCircles';
import Gold from './components/gold';

export default function Stats() {
  return(
    <ScrollView>
      <StatusBar style='dark' />
      <ClassBreedChar />
      <AttributesListBars />
      <AttributesListCircles />
      <Gold />
    </ScrollView>
  );
}