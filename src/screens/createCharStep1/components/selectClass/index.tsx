import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import paladinIcon from '../../../../assets/icons/escudo.png'
import necromancerIcon from '../../../../assets/icons/cranio.png'
import rogueIcon from '../../../../assets/icons/punhal.png'
import warriorIcon from '../../../../assets/icons/cavaleiro.png'
import archerIcon from '../../../../assets/icons/alvo.png'
import mageIcon from '../../../../assets/icons/chapeu-de-bruxa.png'

import styles from './styles';

export default function selectClass() {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Escolha sua Classe</Text>
      <View style={styles.classContainer}>
        <TouchableOpacity style={styles.class}>
          <Image  style={styles.avatar} source={paladinIcon} />
          <Text style={styles.nameClass}>Paladino</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.class}>
          <Image  style={styles.avatar} source={necromancerIcon} />
          <Text style={styles.nameClass}>Necromante</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.class}>
          <Image  style={styles.avatar} source={rogueIcon} />
          <Text style={styles.nameClass}>Ladino</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.class}>
          <Image  style={styles.avatar} source={warriorIcon} />
          <Text style={styles.nameClass}>Guerreiro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.class}>
          <Image  style={styles.avatar} source={archerIcon} />
          <Text style={styles.nameClass}>Arqueiro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.class}>
          <Image  style={styles.avatar} source={mageIcon} />
          <Text style={styles.nameClass}>Mago</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}