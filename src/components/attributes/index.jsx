import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { useDispatch } from 'react-redux'


import styles from './styles';

export default function Attributes(props) {
  const [points, setPoints] = useState(0);
  const dispatch = useDispatch();

  function updateValue() {
    dispatch({ type: props.actionAttribute, power: points });
  }

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

    </View>
  );
}