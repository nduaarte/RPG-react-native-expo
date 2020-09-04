import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Graduate_400Regular',
    fontSize: 35,
    margin: 35
  },

  equipContainer: {
    flexDirection: 'row'
  },

  text: {
    fontFamily: 'Graduate_400Regular',
    fontSize: 20,
    marginBottom: 4
  },

  boxSlot: {
    width: 100,
    height: 100,
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#9ea3a1',
    alignItems: 'center',
    justifyContent: 'center'
  },

  armor: {
    width: 125,
    height: 250,
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#9ea3a1',
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },

  allSlotsContainer: {
    alignItems: 'center'
  },

  ajustLowSlot: {
    marginTop: 23
  },

  image: {
    width: 50,
    height: 50
  },

  imageArmor: {
    width: 85,
    height: 85
  }
});

export default styles;