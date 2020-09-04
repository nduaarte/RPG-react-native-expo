import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 30
  },

  text: {
    fontFamily: 'Graduate_400Regular',
    fontSize: 20,
    marginBottom: 4
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
})

export default styles;