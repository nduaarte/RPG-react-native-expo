import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ClassBreedChar from '../../components/classBreedChar';
import AttributesList from './components/attributesList';

export default function Stats() {
  return(
    <View>
      <StatusBar style='dark' />
      <ClassBreedChar />
      <AttributesList />
    </View>
  );
}