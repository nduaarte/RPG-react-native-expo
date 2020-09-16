import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';

export default function AttributeList() {
  const dispatch = useDispatch();

  const [power, setPower] = useState(0);
  const [dexterity, setDexterity] = useState(0);  
  const [intelligence, setTntelligence] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [charisma, setCharisma] = useState(0);

  const [pointsLeft, setPointsLeft] = useState(40);
  var usedPoints = power + intelligence + dexterity + constitution + charisma;

  useEffect(() => {
    setPointsLeft(40);
    setPointsLeft(pointsLeft => pointsLeft - usedPoints);

    dispatch({ type: 'UPDATE_POWER', power});
    dispatch({ type: 'UPDATE_DEXTERITY', dexterity});
    dispatch({ type: 'UPDATE_CONSTITUTION', constitution});
    dispatch({ type: 'UPDATE_INTELLIGENCE', intelligence});
    dispatch({ type: 'UPDATE_CHARISMA', charisma});
    dispatch({ type: 'UPDATE_POINTS', points: pointsLeft});
  }, [power, intelligence, dexterity, constitution, charisma]);

  function incrementValue(attribute: string) {
    switch(attribute) {
      case 'power':
        if(power < 12 && pointsLeft > 0)
          setPower(power + 1);
        break;
      case 'intelligence':
        if(intelligence < 12 && pointsLeft > 0)
          setTntelligence(intelligence + 1);
        break;
      case 'dexterity':
        if(dexterity < 12 && pointsLeft > 0)
          setDexterity(dexterity + 1);
        break;
      case 'constitution':
        if(constitution < 12 && pointsLeft > 0)
          setConstitution(constitution + 1);
        break;
      case 'charisma':
        if(charisma < 12 && pointsLeft > 0)
          setCharisma(charisma + 1);
        break;        
    } 
  }

  function decrementValue(attribute: string) {
    switch(attribute) {
      case 'power':
        if(power > 0)
          setPower(power - 1);
        break;
      case 'intelligence':
        if(intelligence > 0)
          setTntelligence(intelligence - 1);
        break;
      case 'dexterity':
        if(dexterity > 0)
          setDexterity(dexterity - 1);
        break;
      case 'constitution':
        if(constitution > 0)
          setConstitution(constitution - 1);
        break;
      case 'charisma':
        if(charisma > 0)
          setCharisma(charisma - 1);
        break;        
    } 
  }
    
  return(
    <View style={styles.container}>

      <View style={styles.attribute}>
        <View style={styles.row}>
          <FontAwesome color='#980D0D' name='circle' size={20} />
          <Text style={styles.textAttribute}>Força</Text>
        </View>         
        <View style={styles.row}>
          <TouchableOpacity onPress={() => decrementValue('power')}>
            <Entypo color='#DD4B4B' name='circle-with-minus' size={30} />
          </TouchableOpacity>

          <View style={styles.valueContainer}>
            <Text style={styles.value}>{power}</Text>
          </View>
          
          <TouchableOpacity onPress={() => incrementValue('power')}>
            <Entypo color='#77AE80' name='circle-with-plus' size={30} />
          </TouchableOpacity>
        </View>
      </View>



      <View style={styles.attribute}>
        <View style={styles.row}>
          <FontAwesome color='#0D97AA' name='circle' size={20} />
          <Text style={styles.textAttribute}>Inteligência</Text>
        </View>         
        <View style={styles.row}>
          <TouchableOpacity onPress={() => decrementValue('intelligence')}>
            <Entypo color='#DD4B4B' name='circle-with-minus' size={30} />
          </TouchableOpacity>

          <View style={styles.valueContainer}>
            <Text style={styles.value}>{intelligence}</Text>
          </View>
          
          <TouchableOpacity onPress={() => incrementValue('intelligence')}>
            <Entypo color='#77AE80' name='circle-with-plus' size={30} />
          </TouchableOpacity>
        </View>
      </View>     



      <View style={styles.attribute}>
        <View style={styles.row}>
          <FontAwesome color='#329419' name='circle' size={20} />
          <Text style={styles.textAttribute}>Destreza</Text>
        </View>         
        <View style={styles.row}>
          <TouchableOpacity onPress={() => decrementValue('dexterity')}>
            <Entypo color='#DD4B4B' name='circle-with-minus' size={30} />
          </TouchableOpacity>

          <View style={styles.valueContainer}>
            <Text style={styles.value}>{dexterity}</Text>
          </View>
          
          <TouchableOpacity onPress={() => incrementValue('dexterity')}>
            <Entypo color='#77AE80' name='circle-with-plus' size={30} />
          </TouchableOpacity>
        </View>
      </View>


      
      <View style={styles.attribute}>
        <View style={styles.row}>
          <FontAwesome color='#B1A215' name='circle' size={20} />
          <Text style={styles.textAttribute}>Constituição</Text>
        </View>         
        <View style={styles.row}>
          <TouchableOpacity onPress={() => decrementValue('constitution')}>
            <Entypo color='#DD4B4B' name='circle-with-minus' size={30} />
          </TouchableOpacity>

          <View style={styles.valueContainer}>
            <Text style={styles.value}>{constitution}</Text>
          </View>
          
          <TouchableOpacity onPress={() => incrementValue('constitution')}>
            <Entypo color='#77AE80' name='circle-with-plus' size={30} />
          </TouchableOpacity>
        </View>
      </View> 



      <View style={styles.attribute}>
        <View style={styles.row}>
          <FontAwesome color='#841F8D' name='circle' size={20} />
          <Text style={styles.textAttribute}>Carisma</Text>
        </View>         
        <View style={styles.row}>
          <TouchableOpacity onPress={() => decrementValue('charisma')}>
            <Entypo color='#DD4B4B' name='circle-with-minus' size={30} />
          </TouchableOpacity>

          <View style={styles.valueContainer}>
            <Text style={styles.value}>{charisma}</Text>
          </View>
          
          <TouchableOpacity onPress={() => incrementValue('charisma')}>
            <Entypo color='#77AE80' name='circle-with-plus' size={30} />
          </TouchableOpacity>
        </View>
      </View> 


      <View style={styles.pointsLeftContainer}>
        <Text style={styles.pointsText}>Pontos Restantes:</Text>
        <Text style={styles.pointsLeft}>{pointsLeft}</Text> 
      </View>   
    </View>
  );
}