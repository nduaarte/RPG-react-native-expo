import React from 'react';
import { ScrollView } from 'react-native';

import Body from './components/body';
import Potions from './components/potions';
import Bag from './components/bag';

export default function Inventory() {
  return(
    <ScrollView>
      <Body />
      <Potions />
      <Bag />
    </ScrollView>
  );
}