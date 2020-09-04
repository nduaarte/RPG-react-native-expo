import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import statsIcon from '../assets/icons/attributes.png';
import inventoryIcon from '../assets/icons/inventoryIcon.png';

import Stats from '../screens/stats';
import Inventory from '../screens/inventory';

export default function EquipCharTab() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return(
    <Navigator>
      <Screen name='Estatísticas' component={Stats} options={{
        tabBarIcon: () => {
          return(
            <Image source={statsIcon} style={{width: 30, height: 30}} />
          );
        }
      }} />
      <Screen name='Inventário' component={Inventory} options={{
        tabBarIcon: () => {
          return(
            <Image source={inventoryIcon} style={{width: 30, height: 30}} />
          );
        }
      }} />
    </Navigator>
  );
}