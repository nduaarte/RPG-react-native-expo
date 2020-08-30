import React from 'react';
import { ScrollView } from 'react-native';

import Slots from './components/inventory';

export default function Inventory() {
  return(
    <ScrollView>
      <Slots />
    </ScrollView>
  );
}