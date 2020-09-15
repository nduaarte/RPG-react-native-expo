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
  const intelligence = useSelector(state => state.attributesReducer.intelligence);
  const constitution = useSelector(state => state.attributesReducer.constitution);
  const [chosenBreed, setChosenBreed] = useState('');

  const breedsArr = [
    { name: 'daedra', health: 9, mana: 20, stamina: 25 },
    { name: 'elf', health: 9, mana: 30, stamina: 20 },
    { name: 'hobbit', health: 8, mana: 20, stamina: 20 },
    { name: 'dwarf', health: 12, mana: 10, stamina: 35 },
    { name: 'human', health: 9, mana: 20, stamina: 20 },
    { name: 'argonian', health: 11, mana: 10, stamina: 25 }
  ];

  function chosingBreed(breed: string) {
    setChosenBreed(breed);
  }

  // Calcula o modificador.
  function calculateModifier(attribute, infoBreed) {
    let less = 3.5;
    if(attribute % 2 === 0)
      less = 3;
    return ((attribute / 2) - less) + infoBreed;
  }

  function passBreedAttributes() {
    switch(chosenBreed) {
      case 'Anão': 
        // Se eu não conseguir entender isso, refazer lógica.
        return { ...breedsArr, health: calculateModifier(constitution, breedsArr[3].health) };
    }   
  }

  useEffect(() => {
    dispatch({ type: 'CHARACTER_BREED', breed: chosenBreed });

    // switch(chosenBreed) {
    //   case 'Anão':
    //     dispatch({ type: 'UPDATE_MAXHEALTH', value: calculateModifier(vida, 12) });
    //     dispatch({ type: 'UPDATE_MAXMANA', value: calculateModifier(mana, 10) });
    //     dispatch({ type: 'UPDATE_MAXESTAMINA', value: calculateModifier(stamina, 35) });
    //     break;
    //   case 'Elfo':
    // }
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