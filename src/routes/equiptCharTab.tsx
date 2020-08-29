import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Stats from '../screens/stats';
import Inventory from '../screens/inventory';

export default function InventoryTab() {
  const Tab = createBottomTabNavigator();

  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Stats' component={Stats} />
        <Tab.Screen name='Inventory' component={Inventory} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}