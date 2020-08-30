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
    borderColor: '#9ea3a1'
  },

  armor: {
    width: 125,
    height: 250,
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#9ea3a1',
    marginHorizontal: 15
  },

  allSlotsContainer: {
    alignItems: 'center'
  },

  ajustLowSlot: {
    marginTop: 24
  },

  potionsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  inventoryContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  inventorySlot: {
    width: 100,
    height: 100,
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#9ea3a1',
    margin: 3
  }
});

export default styles;