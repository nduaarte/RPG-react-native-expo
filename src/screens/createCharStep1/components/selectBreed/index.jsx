import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import elf from '../../../../assets/images/elf.png';
import argonian from '../../../../assets/images/argonian.png';
import dwarf from '../../../../assets/images/dwarf.png';
import human from '../../../../assets/images/human.png';
import daedra from '../../../../assets/images/daedra.png';
import hobbit from '../../../../assets/images/hobbit.png';


import styles from './styles';

export default function SelectBreed() {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Escolha sua Raça</Text>
      <View style={styles.containerBreeds}>
        <TouchableOpacity style={styles.breed}>
          <Image style={styles.avatar} source={elf} />
          <Text style={styles.breedName}>Elfo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.breed}>
          <Image style={styles.avatar} source={dwarf} />
          <Text style={styles.breedName}>Anão</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.breed}>
          <Image style={styles.avatar} source={argonian} />
          <Text style={styles.breedName}>Argoniano</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.breed}>
          <Image style={styles.avatar} source={daedra} />
          <Text style={styles.breedName}>Daedra</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.breed}>
          <Image style={styles.avatar} source={hobbit} />
          <Text style={styles.breedName}>Hobbit</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.breed}>
          <Image style={styles.avatar} source={human} />
          <Text style={styles.breedName}>Humano</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}