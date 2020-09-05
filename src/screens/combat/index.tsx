import React from 'react';
import { ScrollView } from 'react-native';

import desertIcon from '../../assets/icons/cactus.png'
import waterIcon from '../../assets/icons/coral.png'
import forestIcon from '../../assets/icons/tree.png'
import rockIcon from '../../assets/icons/landslide.png'
import jungleIcon from '../../assets/icons/forest.png'
import snowIcon from '../../assets/icons/freezer.png'

import Title from './components/title';
import Biome from './components/biome';

export default function Combat() {
  return(
    <ScrollView>
      <Title />
      <Biome name='Deserto' color='#C8A62F' icon={desertIcon} />
      <Biome name='Aquático' color='#3B7AC3' icon={waterIcon} />
      <Biome name='Floresta' color='#698B22' icon={forestIcon} />
      <Biome name='Rochoso' color='#6A5151' icon={rockIcon} />
      <Biome name='Nevado' color='#9DD6DA' icon={snowIcon} />
      <Biome name='Selva' color='#317C17' icon={jungleIcon} />
    </ScrollView>
  );
}