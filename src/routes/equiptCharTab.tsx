import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StatsIcon from '../assets/icons/attributes.png';

import Stats from '../screens/stats';
import Inventory from '../screens/inventory';

export default function InventoryTab() {
  const Tab = createBottomTabNavigator();

  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Stats' component={Stats} options={{
          tabBarIcon: () => {
            let icon = StatsIcon
            icon
          }
        }}/>
        <Tab.Screen name='Inventory' component={Inventory} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}