import React, { useEffect, useState } from 'react';
import { ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import desert from '../../assets/images/biomesImages/desertBG.jpg';
import snow from '../../assets/images/biomesImages/snowBG.jpg';
import aquatic from '../../assets/images/biomesImages/aquaticBG.jpg';
import rock from '../../assets/images/biomesImages/rockBG.jpg';
import forest from '../../assets/images/biomesImages/forestBG.jpg';
import jungle from '../../assets/images/biomesImages/jungleBG.jpg';

import forestEnemies from '../../data/enemies/forest';

import InfoEnemy from './components/infoEnemy';
import Skills from './components/skills';
import Input from './components/input';
import CombatLog from './components/combatLog';

export default function Combat2() {
  const dispatch = useDispatch();
  const biome = useSelector(state => state.combatReducer.biomeImageName);
  const [image, setImage] = useState(forest);

  const currentBiome = forestEnemies; 
  const chosenEnemy = Math.floor(Math.random() * currentBiome.length);

  useEffect(() => {
    dispatch({ type: 'UPDATE_NAME_ENEMY', value: currentBiome[chosenEnemy].name });
    dispatch({ type: 'UPDATE_MAXLIFE_ENEMY', value: currentBiome[chosenEnemy].life });
    dispatch({ type: 'UPDATE_CURRENTLIFE_ENEMY', value: currentBiome[chosenEnemy].life });
    dispatch({ type: 'UPDATE_DAMAGE_ENEMY', value: currentBiome[chosenEnemy].damage });
    dispatch({ type: 'UPDATE_ARMOR_ENEMY', value: currentBiome[chosenEnemy].armor });

    switch(biome) {
      case 'Deserto':
        setImage(desert);
        break;
      case 'Nevado':
        setImage(snow);
        break;
      case 'Aquático':
        setImage(aquatic);
        break;
      case 'Floresta':
        setImage(forest);
        break;
      case 'Rochoso':
        setImage(rock);
        break;
      case 'Selva':
        setImage(jungle);
        break;
    }
  }, []);

  return(
    <ImageBackground style={{flex: 1, width: '100%', height: '40%'}} source={image}>
      <InfoEnemy />
      <Input />
      <Skills />
      <CombatLog />
    </ImageBackground>
  );
}