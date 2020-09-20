import React, { useEffect, useState } from 'react';
import { ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';

import desert from '../../assets/images/biomesImages/desertBG.jpg'
import snow from '../../assets/images/biomesImages/snowBG.jpg'
import aquatic from '../../assets/images/biomesImages/aquaticBG.jpg'
import rock from '../../assets/images/biomesImages/rockBG.jpg'
import forest from '../../assets/images/biomesImages/forestBG.jpg'
import jungle from '../../assets/images/biomesImages/jungleBG.jpg'

import InfoEnemy from './components/infoEnemy';
import Input from './components/input';

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
      <Input />
    </ImageBackground>
  );
}