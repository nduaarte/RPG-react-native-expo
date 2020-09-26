import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { useSelector } from 'react-redux';

import Img from '../../../../assets/images/userLogCombat.png';

import styles from './styles';

export default function CombatLog() {
  const afterAttackUser = useSelector(state => state.combatReducer.afterAttack); //chegar isso, valor nao entrando
  const dataUser = [1, 2];
  const dataEnemy = [3, 4];

  useEffect(() => {
    console.log(afterAttackUser);
    dataUser.push(afterAttackUser);
  }, [afterAttackUser]);

  return(
    <ImageBackground style={styles.container} resizeMode='stretch' source={Img}>
      <Text style={styles.title}>Registro do Combate</Text>
      <View>
        {
          dataUser.map((item, index) => {
            return <Text style={styles.textUser} key={index}>Você infligiu {item} de dano</Text>
          })
        }
        {
          dataEnemy.map((item, index) => {
            return <Text style={styles.textEnemy} key={index}>Você foi atacado com {item} de dano</Text>
          })
        }
      </View>
    </ImageBackground>
  );
}