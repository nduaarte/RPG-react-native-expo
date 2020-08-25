import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Attributes(props) {
  const [points, setPoints] = useState(0);

  function Increment() {
    if(points < 14) {
      setPoints(points + 1);
    }
  }

  function Decrement() {
    if(points > 0) {
      setPoints(points - 1);
    }
  }

  return(
    <View style={styles.container}>
      <View>
        <View style={styles.attribute}>
          <View style={styles.row}>
            <FontAwesome color={props.color} name='circle' size={20} />
            <Text style={styles.textAttribute}>{props.name}</Text>
          </View>         
          <View style={styles.row}>
            <TouchableOpacity onPress={Decrement}>
              <Entypo color='#DD4B4B' name='circle-with-minus' size={30} />
            </TouchableOpacity>

            <View style={styles.valueContainer}>
              <Text style={styles.value}>{points}</Text>
            </View>
            
            <TouchableOpacity onPress={Increment}>
              <Entypo color='#77AE80' name='circle-with-plus' size={30} />
            </TouchableOpacity>
          </View>
        </View>    
      </View>
    </View>
  );
}