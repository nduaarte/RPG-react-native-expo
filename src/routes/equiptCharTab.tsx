import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import statsIcon from '../assets/icons/attributes.png';
import inventoryIcon from '../assets/icons/inventoryIcon.png';

import Stats from '../screens/stats';
import Inventory from '../screens/inventory';

export default function InventoryTab() {
  const Tab = createBottomTabNavigator();

  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Estatísticas' component={Stats} options={{
          tabBarIcon: () => {
            return(
              <Image source={statsIcon} style={{width: 30, height: 30}} />
            );
          }
        }} />
        <Tab.Screen name='Inventário' component={Inventory} options={{
          tabBarIcon: () => {
            return(
              <Image source={inventoryIcon} style={{width: 30, height: 30}} />
            );
          }
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}