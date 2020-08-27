import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';

import elf from '../../../../assets/images/elf.png';
import argonian from '../../../../assets/images/argonian.png';
import dwarf from '../../../../assets/images/dwarf.png';
import human from '../../../../assets/images/human.png';
import daedra from '../../../../assets/images/daedra.png';
import hobbit from '../../../../assets/images/hobbit.png';


import styles from './styles';

export default function SelectBreed() {
  const dispatch = useDispatch();
  const [chosenBreed, setChosenBreed] = useState('');

  function chosingBreed(breed) {
    setChosenBreed(breed);
    dispatch({ type: 'CHARACTER_BREED', breed: chosenBreed });
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Escolha sua Raça</Text>
      <View style={styles.containerBreeds}>
        <TouchableOpacity style={styles.breed} onPress={() => chosingBreed('Elfo')}>
          <Image style={styles.avatar} source={elf} />
          <Text style={styles.breedName}>Elfo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.breed} onPress={() => chosingBreed('Anão')}>
          <Image style={styles.avatar} source={dwarf} />
          <Text style={styles.breedName}>Anão</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.breed} onPress={() => chosingBreed('Argoniano')}>
          <Image style={styles.avatar} source={argonian} />
          <Text style={styles.breedName}>Argoniano</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.breed} onPress={() => chosingBreed('Daedra')}>
          <Image style={styles.avatar} source={daedra} />
          <Text style={styles.breedName}>Daedra</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.breed} onPress={() => chosingBreed('Hobbit')}>
          <Image style={styles.avatar} source={hobbit} />
          <Text style={styles.breedName}>Hobbit</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.breed} onPress={() => chosingBreed('Humano')}>
          <Image style={styles.avatar} source={human} />
          <Text style={styles.breedName}>Humano</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}