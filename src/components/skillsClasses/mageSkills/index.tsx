import React from 'react';
import { View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux'

import icon from '../../../assets/images/skills/heal.png'

import styles from './styles';

export default function MageSkills() {
  const dispatch = useDispatch()
  const maxLifeChar = useSelector(state => state.infoBarsReducer.maxLife);
  const currentLifeChar = useSelector(state => state.infoBarsReducer.currentLifeChar);
  const healPercetage = 30;

  function calculateHealing() {
    const healValue = (maxLifeChar * healPercetage) / 100;
    healValue.toFixed(1);
    dispatch({ type: 'UPDATE_CURRENTHEALTH', value: currentLifeChar + healValue });
  }

  return(
    <View style={styles.container}>
      <RectButton style={styles.buttonHability} onPress={() => calculateHealing()}>
        <Image style={styles.icon} source={icon} />
      </RectButton>
    </View>
  );
}