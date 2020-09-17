import React from 'react';
import { View, Text } from 'react-native';
import * as Progress from 'react-native-progress';

import styles from './styles';

export default function AttributesCharBars(props) {
  const barValue = ((props.currentValue * 100) / props.totalValue) / 100;
  barValue.toFixed(2);
  
  return(
    <View style={styles.container}>
      <View style={styles.barInfo}>
        <View style={styles.row}>
          <Text style={styles.text}>{props.attributeName}:</Text>
          <Text style={styles.text}>{props.currentValue}/{props.totalValue}</Text>
        </View>
        <Progress.Bar
          progress={barValue} 
          width={300} 
          borderRadius={0}
          height={25}
          borderWidth={2}
          color={props.color}
          borderColor='#000'
        />
      </View>
    </View>
  );
}