import React from 'react';
import { View, Text, Image } from 'react-native';

import ringSlot from '../../../../assets/icons/jewel.png'
import necklaceSlot from '../../../../assets/icons/pendant.png'
import gloveSlot from '../../../../assets/icons/glove.png'
import armorSlot from '../../../../assets/icons/armor.png'

import styles from './styles';

export default function Body() {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Equipamento</Text>
      <View style={styles.equipContainer}>
        <View style={styles.allSlotsContainer}>

          <Text style={styles.text}>Colar</Text>
          <View style={styles.boxSlot}>
            <Image style={styles.image} source={necklaceSlot} />
          </View>

          <Text style={[styles.text, styles.ajustLowSlot]}>Esquerda</Text>
          <View style={styles.boxSlot}>
            <Image style={styles.image} source={gloveSlot} />
          </View>
        </View>

        <View style={styles.allSlotsContainer}>
          <Text style={styles.text}>Traje</Text>
          <View style={styles.armor}>
            <Image style={styles.imageArmor} source={armorSlot} />
          </View>
        </View>

        <View style={styles.allSlotsContainer}>

          <Text style={styles.text}>Anel</Text>
          <View style={styles.boxSlot}>
            <Image style={styles.image} source={ringSlot} />
          </View>

          <Text style={[styles.text, styles.ajustLowSlot]}>Direita</Text>
          <View style={styles.boxSlot}>
            <Image style={styles.image} source={gloveSlot} />
          </View>
        </View>
      </View>
    </View>
  );
}