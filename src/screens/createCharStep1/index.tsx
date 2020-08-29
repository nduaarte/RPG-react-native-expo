import React from 'react';
import { StatusBar }  from 'expo-status-bar'
import { View, ScrollView } from 'react-native';

import Input from './components/input';
import SelectBreed from './components/selectBreed';
import SelectClass from './components/selectClass';
import ClassBreedChar from '../../components/classBreedChar';
import BarCreateChar from '../../components/barCreateChar';

export default function CreateCharStep1() {
  return(
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <StatusBar style='dark' />
      <ScrollView>
        <Input />
        <SelectBreed />
        <SelectClass />
        <ClassBreedChar />
      </ScrollView>
      <BarCreateChar firstStep='#3E8BFF' navigate='CreateCharStep2'/>
    </View>
  );
}