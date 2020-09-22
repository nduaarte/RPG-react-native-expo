import React, { useEffect, useState } from 'react';
import { ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

import desert from '../../assets/images/biomesImages/desertBG.jpg'
import snow from '../../assets/images/biomesImages/snowBG.jpg'
import aquatic from '../../assets/images/biomesImages/aquaticBG.jpg'
import rock from '../../assets/images/biomesImages/rockBG.jpg'
import forest from '../../assets/images/biomesImages/forestBG.jpg'
import jungle from '../../assets/images/biomesImages/jungleBG.jpg'

import InfoEnemy from './components/infoEnemy';
import Skills from './components/skills';
import Input from './components/input';
import CombatLog from './components/combatLog';

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
    <ImageBackground style={{flex: 1, width: '100%', height: '40%'}} source={image}>
      <InfoEnemy />
      <Input />
      <Skills />
      <CombatLog />
    </ImageBackground>
  );
}