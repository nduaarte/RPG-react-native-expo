import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import forestEnemies from '../../data/enemies/forest';

import InfoEnemy from './components/infoEnemy';
import Skills from './components/skills';
import Input from './components/input';
import InfoChar from './components/infoChar';

export default function Combat2() {
  const dispatch = useDispatch();
  const currentBiome = forestEnemies; 
  const chosenEnemy = Math.floor(Math.random() * currentBiome.length);

  useEffect(() => {
    dispatch({ type: 'UPDATE_NAME_ENEMY', value: currentBiome[chosenEnemy].name });
    dispatch({ type: 'UPDATE_MAXLIFE_ENEMY', value: currentBiome[chosenEnemy].life });
    dispatch({ type: 'UPDATE_CURRENTLIFE_ENEMY', value: currentBiome[chosenEnemy].life });
    dispatch({ type: 'UPDATE_DAMAGE_ENEMY', value: currentBiome[chosenEnemy].damage });
    dispatch({ type: 'UPDATE_ARMOR_ENEMY', value: currentBiome[chosenEnemy].armor });
    dispatch({ type: 'UPDATE_IMAGE_ENEMY', value: currentBiome[chosenEnemy].image });
    dispatch({ type: 'UPDATE_ITEM_ENEMY', value: currentBiome[chosenEnemy].loot.item });
    dispatch({ type: 'UPDATE_GOLD_ENEMY', value: currentBiome[chosenEnemy].loot.gold });
    dispatch({ type: 'UPDATE_XP_ENEMY', value: currentBiome[chosenEnemy].loot.xp });
  }, []);

  return(
    <View style={{flex: 1}}>
      <InfoEnemy />
      <Input />
      <Skills/>
      <InfoChar />
    </View>
  );
}