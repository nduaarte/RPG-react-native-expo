import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import forestEnemies from '../../data/enemies/forest';

import InfoEnemy from './components/infoEnemy';
import Skills from './components/skills';
import Input from './components/input';
import CombatLog from './components/combatLog';

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
  }, []);

  return(
    <View style={{flex: 1}}>
      <InfoEnemy />

    </View>
  );
}