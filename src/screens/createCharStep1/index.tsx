import React from 'react';
import { StatusBar }  from 'expo-status-bar'
import { View, ScrollView } from 'react-native';

import SelectBreed from './components/selectBreed';
import SelectClass from './components/selectClass';
import HeaderOnly from '../../components/headerOnly';
import BarCreateChar from '../../components/barCreateChar';

export default function CreateCharStep1() {
  return(
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <StatusBar style='dark' />
      <ScrollView>
        <HeaderOnly />
        <SelectBreed />
        <SelectClass />
      </ScrollView>
      <BarCreateChar  firstStep='#3E8BFF' navigate='CreateCharStep2'/>
    </View>
  );
}