import React from 'react';
import { AppLoading } from 'expo';

import { Graduate_400Regular, useFonts } from '@expo-google-fonts/graduate'

import CreateCharStack from './src/routes/createCharStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    Graduate_400Regular
  });

  if(!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <CreateCharStack />
      </>
    );
  }
}