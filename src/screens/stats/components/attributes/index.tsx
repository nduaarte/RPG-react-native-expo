import React from 'react';
import { View, Text } from 'react-native';
import * as Progress from 'react-native-progress';

import styles from './styles';

export default function Attributes() {
  return(
    <View style={styles.container}>
      <View style={styles.barInfoContainer}>
        <View style={styles.barInfo}>
          <View style={styles.row}>
            <Text style={styles.text}>Vida:</Text>
            <Text style={styles.text}>60/60</Text>
          </View>
          <Progress.Bar
            progress={0.4} width={300} 
            borderRadius={0}
            height={25}
            borderWidth={2}
            color='#CC1F1F'
            borderColor='#000'
            />
        </View>

        <View style={styles.barInfo}>
          <View style={styles.row}>
            <Text style={styles.text}>Mana:</Text>
            <Text style={styles.text}>60/60</Text>
          </View>
          <Progress.Bar
            progress={0.4} width={300} 
            borderRadius={0}
            height={25}
            borderWidth={2}
            color='#5185C1'
            borderColor='#000'
          />
        </View>

        <View style={styles.barInfo}>
          <View style={styles.row}>
            <Text style={styles.text}>Estamina:</Text>
            <Text style={styles.text}>60/60</Text>
          </View>
          <Progress.Bar
            progress={0.4} width={300} 
            borderRadius={0}
            height={25}
            borderWidth={2}
            color='#60AE31'
            borderColor='#000'
          />
        </View>

        <View style={styles.barInfo}>
          <View style={styles.row}>
            <Text style={styles.text}>Experiência:</Text>
            <Text style={styles.text}>60/60</Text>
          </View>
          <Progress.Bar
            progress={0.4} width={300} 
            borderRadius={0}
            height={25}
            borderWidth={2}
            color='#8ABDBD'
            borderColor='#000'
          />
        </View>
      </View>

      <View style={styles.attributesInfoContainer}>
      <View style={styles.row}>
        <Text>

          Força
        </Text>
        <Text>11</Text>
      </View>
      </View>
    </View>
  );
}