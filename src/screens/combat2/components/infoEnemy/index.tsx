import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux';

import desert from '../../../../assets/images/biomesImages/desertBG.jpg';
import snow from '../../../../assets/images/biomesImages/snowBG.jpg';
import aquatic from '../../../../assets/images/biomesImages/aquaticBG.jpg';
import rock from '../../../../assets/images/biomesImages/rockBG.jpg';
import forest from '../../../../assets/images/biomesImages/forestBG.jpg';
import jungle from '../../../../assets/images/biomesImages/jungleBG.jpg';

import styles from './styles';

export default function InfoEnemy() {
  const biome = useSelector(state => state.combatReducer.biomeImageName);
  const afterAttack = useSelector(state => state.combatReducer.afterAttack);
  const enemyAttackCheck = useSelector(state => state.combatReducer.enemyAttackCheck);

  const enemyImage = useSelector(state => state.currentEnemyInfoReducer.image);
  const enemyName = useSelector(state => state.currentEnemyInfoReducer.name);
  const enemyMaxLife = useSelector(state => state.currentEnemyInfoReducer.maxLife);
  const enemyCurrentLife = useSelector(state => state.currentEnemyInfoReducer.currentLife);

  let barValue = 1 //((enemyCurrentLife * 100) / enemyMaxLife) / 100;

  const [image, setImage] = useState(forest);
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

  const animatableRefView = useRef<Animatable.View & View>(null);    // 
  const animatableRefImage = useRef<Animatable.Image & Image>(null); // Code tirado do github.
  useEffect(() => {
    if(enemyAttackCheck) {
      animatableRefView.current.fadeOutUp();
      animatableRefImage.current.swing();
    }
  }, [enemyAttackCheck]);

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
          borderColor='#1E1E1E'
          borderWidth={3}
          borderRadius={5}
          width={250}
          height={20}
        />
      </View>
      <View style={styles.enemyContainer}>
        <Text style={styles.enemyTitle}>{enemyName}</Text>
        <Animatable.Image 
          style={styles.enemyImage} 
          source={enemyImage}
          duration={750} 
          ref={animatableRefImage} 
        />

        <Animatable.View
          animation='fadeOutUp'
          duration={1750}
          ref={animatableRefView}>
          <Text style={styles.textBloodEnemy}>{afterAttack}</Text>   
        </Animatable.View>
      </View>
    </View>
  );
}