import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../screens/landing';
import CreateCharStep1 from '../screens/createCharStep1';
import CreateCharStep2 from '../screens/createCharStep2';
import CreateCharStep3 from '../screens/createCharStep3';
import EquipCharTab from './equipCharTab';
import EnemyInfo from '../screens/combat2';
const { Navigator, Screen } = createStackNavigator();

export default function createCharStack() {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name='Landing' component={Landing} />
        <Screen name='CreateCharStep1' component={CreateCharStep1} />
        <Screen name='CreateCharStep2' component={CreateCharStep2} />
        <Screen name='CreateCharStep3' component={CreateCharStep3} />
        <Screen name='EquipCharTab' component={EquipCharTab} />
        <Screen name='EnemyInfo' component={EnemyInfo} />        
      </Navigator>
    </NavigationContainer>
  );
} 