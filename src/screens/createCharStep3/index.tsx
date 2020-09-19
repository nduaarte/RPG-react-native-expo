import React, { useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import BarCreateChar from '../../components/barCreateChar';

import styles from './styles';

// Esse componente calcula todos os atributos e informações inicias do personagem e envia para a store.
export default function CreateCharStep3() {
  const dispatch = useDispatch();
  const breedChar = useSelector(state => state.infoCharacterReducer.breed);
  const classChar = useSelector(state => state.infoCharacterReducer.class);

  const dexterity = useSelector(state => state.attributesReducer.dexterity);
  const power = useSelector(state => state.attributesReducer.power);
  const constitution = useSelector(state => state.attributesReducer.constitution);
  const intelligence = useSelector(state => state.attributesReducer.intelligence);
  const charisma = useSelector(state => state.attributesReducer.charisma);

  const maxHealth = useSelector(state => state.infoBarsReducer.maxHealth);
  const maxStamina = useSelector(state => state.infoBarsReducer.maxStamina);
  const maxMana = useSelector(state => state.infoBarsReducer.maxMana);


  // Calculador automático do modificador.
  function calculateModifier(attribute: number, infoBreed: number) {
    let less = 3.5;
    if(attribute % 2 === 0)
      less = 3;
    return ((attribute / 2) - less) + infoBreed;
  }  

  useEffect(() => {

    // Switch para mandar os atributos padrões da classe + os 40 pontos de
    // atributos escolhidos anteriormente para a store.
    switch(classChar) {
      case 'Ladino': 
        dispatch({ type: 'UPDATE_DEXTERITY', dexterity: 6 + dexterity });
        dispatch({ type: 'UPDATE_CHARISMA', charisma: 4 + charisma });
        break;
      case 'Mago':
        dispatch({ type: 'UPDATE_INTELLIGENCE', intelligence: 7 + intelligence });
        dispatch({ type: 'UPDATE_CONSTITUTION', constitution: 3 + constitution });
        break;
      case 'Necromante':
        dispatch({ type: 'UPDATE_INTELLIGENCE', intelligence: 6 + intelligence });
        dispatch({ type: 'UPDATE_CONSTITUTION', constitution: 2 + constitution });
        dispatch({ type: 'UPDATE_CHARISMA', charisma: 2 + charisma });
        break;
      case 'Paladino':
        dispatch({ type: 'UPDATE_CONSTITUTION', constitution: 6 + constitution });
        dispatch({ type: 'UPDATE_CHARISMA', charisma: 4 + charisma });
        break; 
      case 'Arqueiro':
        dispatch({ type: 'UPDATE_DEXTERITY', dexterity: 7 + dexterity });
        dispatch({ type: 'UPDATE_CONSTITUTION', constitution: 3 + constitution });
        break;
      case 'Guerreiro':
        dispatch({ type: 'UPDATE_DEXTERITY', dexterity: 3 + dexterity });
        dispatch({ type: 'UPDATE_POWER', power: 5 + power });
        dispatch({ type: 'UPDATE_CONSTITUTION', constitution: 2 + constitution });
        break;
    }

    // Switch para lançar as informações de vida, stamina e mana máxima da raça escolhida na store.
    switch(breedChar) {
      case 'Dedra': 
        dispatch({ type: 'UPDATE_MAXHEALTH', value: calculateModifier(constitution, 9) + maxHealth });
        dispatch({ type: 'UPDATE_MAXSTAMINA', value: calculateModifier(constitution, 25) + maxStamina });
        dispatch({ type: 'UPDATE_MAXMANA', value: calculateModifier(intelligence, 25) + maxMana });

        dispatch({ type: 'UPDATE_CURRENTHEALTH', value: calculateModifier(constitution, 9)});
        dispatch({ type: 'UPDATE_CURRENTSTAMINA', value: calculateModifier(constitution, 25)});
        dispatch({ type: 'UPDATE_CURRENTMANA', value: calculateModifier(intelligence, 25)});
        break;     
      case 'Elfo':
        dispatch({ type: 'UPDATE_MAXHEALTH', value: calculateModifier(constitution, 9) + maxHealth });
        dispatch({ type: 'UPDATE_MAXSTAMINA', value: calculateModifier(constitution, 20) + maxStamina });
        dispatch({ type: 'UPDATE_MAXMANA', value: calculateModifier(intelligence, 30) + maxMana });

        dispatch({ type: 'UPDATE_CURRENTHEALTH', value: calculateModifier(constitution, 9)});
        dispatch({ type: 'UPDATE_CURRENTSTAMINA', value: calculateModifier(constitution, 20)});
        dispatch({ type: 'UPDATE_CURRENTMANA', value: calculateModifier(intelligence, 30)});
        break;
      case 'Hobbit':
        dispatch({ type: 'UPDATE_MAXHEALTH', value: calculateModifier(constitution, 8) + maxHealth });
        dispatch({ type: 'UPDATE_MAXSTAMINA', value: calculateModifier(constitution, 20) + maxStamina });
        dispatch({ type: 'UPDATE_MAXMANA', value: calculateModifier(intelligence, 20) + maxMana });

        dispatch({ type: 'UPDATE_CURRENTHEALTH', value: calculateModifier(constitution, 8)});
        dispatch({ type: 'UPDATE_CURRENTSTAMINA', value: calculateModifier(constitution, 20)});
        dispatch({ type: 'UPDATE_CURRENTMANA', value: calculateModifier(intelligence, 20)});
        break;
      case 'Anão':
        dispatch({ type: 'UPDATE_MAXHEALTH', value: calculateModifier(constitution, 12) + maxHealth });
        dispatch({ type: 'UPDATE_MAXSTAMINA', value: calculateModifier(constitution, 35) + maxStamina });
        dispatch({ type: 'UPDATE_MAXMANA', value: calculateModifier(intelligence, 10) + maxMana });

        dispatch({ type: 'UPDATE_CURRENTHEALTH', value: calculateModifier(constitution, 12)});
        dispatch({ type: 'UPDATE_CURRENTSTAMINA', value: calculateModifier(constitution, 35)});
        dispatch({ type: 'UPDATE_CURRENTMANA', value: calculateModifier(intelligence, 10)});
        break;
      case 'Humano':
        dispatch({ type: 'UPDATE_MAXHEALTH', value: calculateModifier(constitution, 9) + maxHealth });
        dispatch({ type: 'UPDATE_MAXSTAMINA', value: calculateModifier(constitution, 20) + maxStamina });
        dispatch({ type: 'UPDATE_MAXMANA', value: calculateModifier(intelligence, 20) + maxMana });

        dispatch({ type: 'UPDATE_CURRENTHEALTH', value: calculateModifier(constitution, 9)});
        dispatch({ type: 'UPDATE_CURRENTSTAMINA', value: calculateModifier(constitution, 20)});
        dispatch({ type: 'UPDATE_CURRENTMANA', value: calculateModifier(intelligence, 20)});
        break;
      case 'Argoniano':
        dispatch({ type: 'UPDATE_MAXHEALTH', value: calculateModifier(constitution, 11) + maxHealth });
        dispatch({ type: 'UPDATE_MAXSTAMINA', value: calculateModifier(constitution, 25) + maxStamina });
        dispatch({ type: 'UPDATE_MAXMANA', value: calculateModifier(intelligence, 10) + maxMana });

        dispatch({ type: 'UPDATE_CURRENTHEALTH', value: calculateModifier(constitution, 11)});
        dispatch({ type: 'UPDATE_CURRENTSTAMINA', value: calculateModifier(constitution, 25)});
        dispatch({ type: 'UPDATE_CURRENTMANA', value: calculateModifier(intelligence, 10)});
        break;
    }

    // Confirma criação do personagem quando tudo estiver pronto.
    dispatch({ type: 'CHARACTER_CREATE', create: true });
  }, []);

  console.log(`maxHealth: ${useSelector(state => state.infoBarsReducer.maxHealth)}`);
  console.log(`maxStamina: ${useSelector(state => state.infoBarsReducer.maxStamina)}`);
  console.log(`maxMana: ${useSelector(state => state.infoBarsReducer.maxMana)}`);

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