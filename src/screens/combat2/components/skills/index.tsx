import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { RectButton } from 'react-native-gesture-handler';

import habilityImg from '../../../../assets/images/skills/summon.png';
import defaultAttackImg from '../../../../assets/images/skills/default-attack.png';

import styles from './styles';

export default function Skills(props) {
  const classChar = useSelector(state => state.infoCharacterReducer.class);
  const [hability, setHability] = useState();
  const [passive, setPassive] = useState();

  // Para setar quais vão ser as imagens e skills a serem exibidas na tela.
  // switch(classChar) {
  //   case 'Mago':
  //     setPassive();
  //     setHability();
  //     break;
  // }

  return(
    <View style={styles.container}>
      <RectButton style={styles.buttonHability}>
        <Image style={styles.image} source={habilityImg} />
      </RectButton>

      <RectButton style={styles.buttonDefaultAttack}>
        <Image style={styles.image} source={defaultAttackImg} />
      </RectButton>
    </View>
  );
}