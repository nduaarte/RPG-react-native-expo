import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Attributes() {
  return(
    <View style={styles.container}>
      <View style={styles.attributesContainer}>
        <View style={styles.attribute}>
          <View style={styles.row}>
            <FontAwesome color='#980D0D' name='circle' size={20} />
            <Text style={styles.textAttribute}>Força</Text>
          </View>         
          <View style={styles.row}>
            <TouchableOpacity>
              <Entypo color='#DD4B4B' name='circle-with-minus' size={30} />
            </TouchableOpacity>

            <View style={styles.valueContainer}>
              <Text style={styles.value}>{0}</Text>
            </View>
            
            <TouchableOpacity>
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
            <TouchableOpacity>
              <Entypo color='#DD4B4B' name='circle-with-minus' size={30} />
            </TouchableOpacity>

            <View style={styles.valueContainer}>
              <Text style={styles.value}>{0}</Text>
            </View>
            
            <TouchableOpacity>
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
            <TouchableOpacity>
              <Entypo color='#DD4B4B' name='circle-with-minus' size={30} />
            </TouchableOpacity>

            <View style={styles.valueContainer}>
              <Text style={styles.value}>{0}</Text>
            </View>
            
            <TouchableOpacity>
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
            <TouchableOpacity>
              <Entypo color='#DD4B4B' name='circle-with-minus' size={30} />
            </TouchableOpacity>

            <View style={styles.valueContainer}>
              <Text style={styles.value}>{0}</Text>
            </View>
            
            <TouchableOpacity>
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
            <TouchableOpacity>
              <Entypo color='#DD4B4B' name='circle-with-minus' size={30} />
            </TouchableOpacity>

            <View style={styles.valueContainer}>
              <Text style={styles.value}>{0}</Text>
            </View>
            
            <TouchableOpacity>
              <Entypo color='#77AE80' name='circle-with-plus' size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      
    </View>
  );
}