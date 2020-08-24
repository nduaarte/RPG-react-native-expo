import React from 'react';
import { View, ScrollView } from 'react-native';

import TitleInfo from './components/titleInfo';
import AttributeList from './components/attributsList';
import BarCreateChar from '../../components/barCreateChar';

export default function CreateChatStep2() {
  return(
    <View style={{flex: 1}}>
      <ScrollView>
        <TitleInfo />
        <AttributeList />
      </ScrollView>
      <BarCreateChar secondStep='#3E8BFF' />
    </View>
  );
}