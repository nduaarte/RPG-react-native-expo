import React from 'react';
import { View, ScrollView } from 'react-native';

import Inventory from '../screens/inventory';

export default function InventoryTab() {
  return(
    <ScrollView>
      <Inventory />
    </ScrollView>
  );
}