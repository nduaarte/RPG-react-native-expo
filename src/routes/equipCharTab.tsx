import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import statsIcon from '../assets/icons/attributes.png';
import inventoryIcon from '../assets/icons/inventoryIcon.png';
import combatIcon from '../assets/icons/sword.png';

import Stats from '../screens/stats';
import Inventory from '../screens/inventory';
import Combat from '../screens/combat';

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
      }}/>

      <Screen name='Inventário' component={Inventory} options={{
        tabBarIcon: () => {
          return(
            <Image source={inventoryIcon} style={{width: 30, height: 30}} />
          );
        }
      }} />

      
      <Screen name='Combate' component={Combat} options={{
        tabBarIcon: () => {
          return(
            <Image source={combatIcon} style={{width: 30, height: 30}} />
          );
        }
      }} />
    </Navigator>
  );
}