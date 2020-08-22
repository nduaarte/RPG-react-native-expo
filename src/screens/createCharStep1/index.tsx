import React from 'react';
import { StatusBar }  from 'expo-status-bar'
import { View, ScrollView } from 'react-native';

import Input from './components/input';
import SelectBreed from './components/selectBreed';
import SelectClass from './components/selectClass';
import BarCreateChar from './components/barCreateChar';

export default function CreateCharStep1() {
  return(
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <StatusBar style='dark' />
      <ScrollView>
        <Input />
        <SelectBreed />
        <SelectClass />
      </ScrollView>
      <BarCreateChar />
    </View>
  );
}