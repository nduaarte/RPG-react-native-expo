import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',        
  },

  image: {
    width: 40,
    height: 40
  },

  buttonDefaultAttack: {
    backgroundColor: '#3874c9',
    padding: 10,
    borderRadius: 10,
    marginLeft: 20,
    borderWidth: 1.5,
    borderColor: '#000'
  },
  //#cf3732
  buttonHability: {
    backgroundColor: '#6e4482',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    width: 150,
    borderWidth: 1.5,
    borderColor: '#000'
  }
})

export default styles;