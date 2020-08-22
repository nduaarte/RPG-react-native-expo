import React from 'react';
import { View } from 'react-native';

import Attributes from './components/attributes';

export default function CreateCharStep2() {
  return(
    <View style={{flex: 1}}>
      <Attributes />
    </View>
  );
}