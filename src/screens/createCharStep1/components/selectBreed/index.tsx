import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import elf from '../../../../assets/images/breeds/elf.png';
import argonian from '../../../../assets/images/breeds/argonian.png';
import dwarf from '../../../../assets/images/breeds/dwarf.png';
import human from '../../../../assets/images/breeds/human.png';
import daedra from '../../../../assets/images/breeds/daedra.png';
import hobbit from '../../../../assets/images/breeds/hobbit.png';


import styles from './styles';

export default function SelectBreed() {
  const dispatch = useDispatch();
  const [chosenBreed, setChosenBreed] = useState('');

  function chosingBreed(breed: string) {
    setChosenBreed(breed);
  }

  useEffect(() => {
    dispatch({ type: 'CHARACTER_BREED', breed: chosenBreed });
  }, [chosenBreed]);

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