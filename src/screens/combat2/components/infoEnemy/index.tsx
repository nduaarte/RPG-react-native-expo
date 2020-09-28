import React, { useEffect, useState } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux';

import desert from '../../../../assets/images/biomesImages/desertBG.jpg';
import snow from '../../../../assets/images/biomesImages/snowBG.jpg';
import aquatic from '../../../../assets/images/biomesImages/aquaticBG.jpg';
import rock from '../../../../assets/images/biomesImages/rockBG.jpg';
import forest from '../../../../assets/images/biomesImages/forestBG.jpg';
import jungle from '../../../../assets/images/biomesImages/jungleBG.jpg';

import enemy from '../../../../assets/images/enemys/bear.png'; //imagen deve ser pega da store

import styles from './styles';

export default function InfoEnemy() {
  const biome = useSelector(state => state.combatReducer.biomeImageName);
  const enemyName = useSelector(state => state.currentEnemyInfoReducer.name);
  const enemyMaxLife = useSelector(state => state.currentEnemyInfoReducer.maxLife);
  const enemyCurrentLife = useSelector(state => state.currentEnemyInfoReducer.currentLife);
  const enemyDamage = useSelector(state => state.currentEnemyInfoReducer.damage);
  const [image, setImage] = useState(forest);

  const barValue = ((enemyCurrentLife * 100) / enemyMaxLife) / 100;

  useEffect(() => {
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
    <View style={styles.container}>
      <Image style={styles.imageBG} source={image} />
      <View style={styles.lifeContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Vida:</Text>
          <Text style={styles.text}>{enemyCurrentLife}/{enemyMaxLife}</Text>
        </View>
        <Progress.Bar
          progress={barValue}
          color='#CC1F1F'
          borderColor='#000'
          borderWidth={2}
          borderRadius={2}
          width={250}
          height={20}
        />
      </View>
      <View style={styles.enemyContainer}>
        <Text style={styles.enemyTitle}>{enemyName}</Text>
        <Image style={styles.enemyImage} source={enemy} />
      </View>
    </View>
  );
}