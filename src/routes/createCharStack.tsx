import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../screens/landing';
import CreateCharStep1 from '../screens/createCharStep1';

const { Navigator, Screen } = createStackNavigator();

export default function createCharStack() {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name='CreateCharStep1' component={CreateCharStep1} />
        <Screen name='Landing' component={Landing} />
      </Navigator>
    </NavigationContainer>
  )
} 