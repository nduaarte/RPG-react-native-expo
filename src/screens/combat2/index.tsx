import React, { useEffect, useState } from 'react';
import { ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';

import desert from '../../assets/images/desertBG.jpg'
import snow from '../../assets/images/snowBG.jpg'
import aquatic from '../../assets/images/aquaticBG.jpg'
import rock from '../../assets/images/rockBG.jpg'
import forest from '../../assets/images/forestBG.jpg'
import jungle from '../../assets/images/jungleBG.jpg'

import InfoEnemy from './components/infoEnemy';

export default function Combat2() {
  const biome = useSelector(state => state.imageCombatBGReducer.biomeImageName);
  const [image, setImage] = useState(forest);

  useEffect(() => {
    if(biome === 'Deserto') setImage(desert);
    if(biome === 'Nevado') setImage(snow);
    if(biome === 'Aquático') setImage(aquatic);
    if(biome === 'Floresta') setImage(forest);
    if(biome === 'Rochoso') setImage(rock);
    if(biome === 'Selva') setImage(jungle);
  }, [])

  return(
    <ImageBackground style={{width: '100%', height: '100%'}} source={image}>
      <InfoEnemy />
    </ImageBackground>
  );
}