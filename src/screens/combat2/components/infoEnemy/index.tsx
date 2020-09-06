import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';

import desert from '../../../../assets/images/desertBG.jpg'

import styles from './styles';

export default function InfoEnemy() {
  const biome = useSelector(state => state.imageCombatBGReducer.biomeImageName);
  const [image, setImage] = useState();

  switch(biome) {
    case 'Deserto':
      setImage(desert);
  }

  console.log(image);
  return(
    <ImageBackground style={styles.container} source={desert}>

    </ImageBackground>
  );
}