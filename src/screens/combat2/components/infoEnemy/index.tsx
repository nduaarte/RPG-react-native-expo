import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image, Modal } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import * as Progress from 'react-native-progress';
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import imageDeath from '../../../../assets/icons/death.png'
import desert from '../../../../assets/images/biomesImages/desertBG.jpg';
import snow from '../../../../assets/images/biomesImages/snowBG.jpg';
import aquatic from '../../../../assets/images/biomesImages/aquaticBG.jpg';
import rock from '../../../../assets/images/biomesImages/rockBG.jpg';
import forest from '../../../../assets/images/biomesImages/forestBG.jpg';
import jungle from '../../../../assets/images/biomesImages/jungleBG.jpg';

import styles from './styles';

export default function InfoEnemy() {
  const navigation = useNavigation();
  const biome = useSelector(state => state.combatReducer.biomeImageName);
  const afterAttack = useSelector(state => state.combatReducer.afterAttack);
  const enemyAttackCheck = useSelector(state => state.combatReducer.enemyAttackCheck);

  const enemyImage = useSelector(state => state.currentEnemyInfoReducer.image);
  const enemyName = useSelector(state => state.currentEnemyInfoReducer.name);
  const enemyMaxLife = useSelector(state => state.currentEnemyInfoReducer.maxLife);
  const enemyCurrentLife = useSelector(state => state.currentEnemyInfoReducer.currentLife);

  const [showModal, setShowModal] = useState(false);
  let barValue = 1 //((enemyCurrentLife * 100) / enemyMaxLife) / 100;

  function navigateGoBack() {
    navigation.navigate('EquipCharTab');
  }

  const [imageBG, setImageBG] = useState(forest);
  useEffect(() => {
    switch(biome) {
      case 'Deserto':
        setImageBG(desert);
        break;
      case 'Nevado':
        setImageBG(snow);
        break;
      case 'Aquático':
        setImageBG(aquatic);
        break;
      case 'Floresta':
        setImageBG(forest);
        break;
      case 'Rochoso':
        setImageBG(rock);
        break;
      case 'Selva':
        setImageBG(jungle);
        break;
    }
  }, []);

  const animatableRefView = useRef<Animatable.View & View>(null);    // 
  const animatableRefImage = useRef<Animatable.Image & Image>(null); // Code tirado do github.
  useEffect(() => {
    if(enemyCurrentLife <= 0)
      setShowModal(true);
      
    if(enemyAttackCheck) {
      animatableRefView.current.fadeOutUp();
      animatableRefImage.current.swing();
    }
  }, [enemyAttackCheck]);

  const enemyDeathModal = (
    <Modal 
      animationType='fade' 
      transparent={true}
      visible={showModal}
      presentationStyle='overFullScreen'>
      <View style={styles.modalContainer}>
        <View style={styles.modalSquare}>
          <Text style={styles.modalTitle}>Inimigo morto</Text>
          <Text style={styles.modalText}>{enemyName} deixou cair 10 ouros.</Text>

          <RectButton 
            style={styles.modalButton} 
            onPress={() => {
              setShowModal(false);
              navigation.navigate('EquipCharTab');
            }}>
            <Text style={styles.modalButtonText}>Me dê isso!</Text>
          </RectButton>
        </View>
      </View>
    </Modal>
  );

  return(
    <View style={styles.container}>
      <Image style={styles.imageBG} source={imageBG} />
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

      {enemyDeathModal}

      <View style={styles.enemyContainer}>
        <Text style={styles.enemyTitle}>{enemyName}</Text>
        <Animatable.Image 
          style={styles.enemyImage} 
          source={ showModal ? imageDeath : enemyImage }
          duration={750} 
          ref={animatableRefImage} 
        />

        <Animatable.View
          duration={1750}
          ref={animatableRefView}>
          <Text style={styles.textBloodEnemy}>{ enemyAttackCheck ? afterAttack : null }</Text>   
        </Animatable.View>
      </View>
    </View>
  );
}