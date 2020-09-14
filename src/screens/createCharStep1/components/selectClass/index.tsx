import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import paladinIcon from '../../../../assets/icons/escudo.png'
import necromancerIcon from '../../../../assets/icons/cranio.png'
import rogueIcon from '../../../../assets/icons/punhal.png'
import warriorIcon from '../../../../assets/icons/cavaleiro.png'
import archerIcon from '../../../../assets/icons/alvo.png'
import mageIcon from '../../../../assets/icons/chapeu-de-bruxa.png'

import styles from './styles';

export default function selectClass() {
  const dispatch = useDispatch();
  const [chosenClass, setChosenClass] = useState('');

  //variaveis apenas para depuração da store
  const dexterity = useSelector(state => state.attributesReducer.dexterity);
  const power = useSelector(state => state.attributesReducer.power);
  const constitution = useSelector(state => state.attributesReducer.constitution);
  const intelligence = useSelector(state => state.attributesReducer.intelligence);
  const charisma = useSelector(state => state.attributesReducer.charisma);

  function chosingClass(classChar: string) {
    setChosenClass(classChar);
  }

  useEffect(() => {
    dispatch({ type: 'CHARACTER_CLASS', class: chosenClass });

    dispatch({ type: 'UPDATE_DEXTERITY', dexterity: 0 });
    dispatch({ type: 'UPDATE_CHARISMA', charisma: 0 });
    dispatch({ type: 'UPDATE_INTELLIGENCE', intelligence: 0 });
    dispatch({ type: 'UPDATE_CONSTITUTION', constitution: 0 }); 
    dispatch({ type: 'UPDATE_POWER', power: 0 }); 

    switch(chosenClass) {
      case 'Ladino': 
        dispatch({ type: 'UPDATE_DEXTERITY', dexterity: 6 });
        dispatch({ type: 'UPDATE_CHARISMA', charisma: 4 });
        break;
      case 'Mago':
        dispatch({ type: 'UPDATE_INTELLIGENCE', intelligence: 7 });
        dispatch({ type: 'UPDATE_CONSTITUTION', constitution: 3 });
        break;
      case 'Necromante':
        dispatch({ type: 'UPDATE_INTELLIGENCE', intelligence: 6 });
        dispatch({ type: 'UPDATE_CONSTITUTION', constitution: 2 });
        dispatch({ type: 'UPDATE_CHARISMA', charisma: 2 });

        break;
      case 'Paladino':
        dispatch({ type: 'UPDATE_CONSTITUTION', constitution: 6 });
        dispatch({ type: 'UPDATE_CHARISMA', charisma: 4 });
        break; 
      case 'Arqueiro':
        dispatch({ type: 'UPDATE_DEXTERITY', dexterity: 7 });
        dispatch({ type: 'UPDATE_CONSTITUTION', constitution: 3 });
        break;
      case 'Guerreiro':
        dispatch({ type: 'UPDATE_DEXTERITY', dexterity: 3 });
        dispatch({ type: 'UPDATE_POWER', power: 5 });
        dispatch({ type: 'UPDATE_CONSTITUTION', constitution: 2 });
        break;
    } 
  }, [chosenClass]);

  console.log(`
    ${chosenClass}\n
    Força: ${power}
    Destreza: ${dexterity}
    Inteligência: ${intelligence}
    Constituição: ${constitution}
    Carisma: ${charisma}
  `);

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Escolha sua Classe</Text>
      <View style={styles.classContainer}>
        <TouchableOpacity style={styles.class} onPress={() => chosingClass('Paladino')}>
          <Image style={styles.avatar} source={paladinIcon} />
          <Text style={styles.nameClass}>Paladino</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.class} onPress={() => chosingClass('Necromante')}>
          <Image style={styles.avatar} source={necromancerIcon} />
          <Text style={styles.nameClass}>Necromante</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.class} onPress={() => chosingClass('Ladino')}>
          <Image style={styles.avatar} source={rogueIcon} />
          <Text style={styles.nameClass}>Ladino</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.class} onPress={() => chosingClass('Guerreiro')}>
          <Image  style={styles.avatar} source={warriorIcon} />
          <Text style={styles.nameClass}>Guerreiro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.class} onPress={() => chosingClass('Arqueiro')}>
          <Image style={styles.avatar} source={archerIcon} />
          <Text style={styles.nameClass}>Arqueiro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.class} onPress={() => chosingClass('Mago')}>
          <Image style={styles.avatar} source={mageIcon} />
          <Text style={styles.nameClass}>Mago</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}