import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import BarCreateChar from '../../components/barCreateChar';

import styles from './styles';

export default function CreateCharStep3() {
  const dispatch = useDispatch();
  const breed = useSelector(state => state.infoCharacterReducer.breed);
  const intelligence = useSelector(state => state.attributesReducer.intelligence);
  const constitution = useSelector(state => state.attributesReducer.constitution);
  let health=0, mana=0, stamina=0;

  const breedsArr = [
    { name: 'daedra', health: 9, mana: 20, stamina: 25 },
    { name: 'elf', health: 9, mana: 30, stamina: 20 },
    { name: 'hobbit', health: 8, mana: 20, stamina: 20 },
    { name: 'dwarf', health: 12, mana: 10, stamina: 35 },
    { name: 'human', health: 9, mana: 20, stamina: 20 },
    { name: 'argonian', health: 11, mana: 10, stamina: 25 }
  ];

  // Calcula o modificador.
  function calculateModifier(attribute: number, infoBreed: number) {
    let less = 3.5;
    if(attribute % 2 === 0)
      less = 3;
    return ((attribute / 2) - less) + infoBreed;
  }  

  useEffect(() => {
    switch(breed) {
      case 'Anão': 
        health = calculateModifier(constitution, breedsArr[1].health);
        stamina = calculateModifier(constitution, breedsArr[1].stamina);
        mana = calculateModifier(intelligence, breedsArr[1].mana);
        break;     
      case 'Elfo':
        health = calculateModifier(constitution, breedsArr[1].health);
        stamina = calculateModifier(constitution, breedsArr[1].stamina);
        mana = calculateModifier(intelligence, breedsArr[1].mana);
        break;
    } 

    console.log(breed, health, mana, stamina); //aqui vai ser un dispatch
    dispatch({ type: 'CHARACTER_CREATE', create: true });
  }, []);

  return(
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.itens}>
          <FontAwesome5 name='check' size={75} color='#519918' />
          <Text style={styles.text}>Personagem</Text>
          <Text style={styles.text}>Concluído!</Text>
        </View>      
      </ScrollView>
      <BarCreateChar thirdStep='#3E8BFF' navigate='Landing' />
    </View>
  );
}