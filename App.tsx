import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux';

import { Graduate_400Regular, useFonts } from '@expo-google-fonts/graduate'

import { Store } from './src/redux/store';
import CreateCharStack from './src/routes/createCharStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    Graduate_400Regular
  });

  if(!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Provider store={Store}>
        <StatusBar style='auto' />
        <CreateCharStack />
      </Provider>
    );
  }
}