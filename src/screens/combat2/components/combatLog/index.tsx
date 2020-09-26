import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { useSelector } from 'react-redux';

import Img from '../../../../assets/images/userLogCombat.png';

import styles from './styles';

export default function CombatLog() {
  const [afterAttackUser, setAfterAttackUser] = useState(useSelector(state => state.combatReducer.afterAttack));
  const [dataUser, setDataUser] = useState([]);
  const dataEnemy = [Number];

  useEffect(() => {
    setDataUser(dataUser => [...dataUser, afterAttackUser]);
    console.log(dataUser);
    console.log(`Novo dano: ${afterAttackUser}`);
  }, [afterAttackUser]);

  return(
    <ImageBackground style={styles.container} resizeMode='stretch' source={Img}>
      <Text style={styles.title}>Registro do Combate</Text>
      <View>
        {
          dataUser.map((damage, index) => {
            if(index != 0)
              return <Text style={styles.textUser} key={index}>Você infligiu {damage} de dano</Text>
          })
        }
        {
          dataEnemy.map((damage, index) => {
            if(index != 0)
              return <Text style={styles.textEnemy} key={index}>Você foi atacado com {damage} de dano</Text>
          })
        }
      </View>
    </ImageBackground>
  );
}