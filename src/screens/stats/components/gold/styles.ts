import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  image: {
    width: 72,
    height: 51
  },

  text: {
    fontFamily: 'Graduate_400Regular',
    fontSize: 35
  }
});

export default styles;