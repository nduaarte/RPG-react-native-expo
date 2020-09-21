import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',        
  },

  image: {
    width: 50,
    height: 50
  },

  buttonDefaultAttack: {
    backgroundColor: '#3874c9',
    padding: 10,
    borderRadius: 10,
    marginLeft: 20,
    borderWidth: 1.5,
    borderColor: '#000'
  },

  buttonHability: {
    backgroundColor: '#cf3732',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    width: 150,
    borderWidth: 1.5,
    borderColor: '#000'
  }
})

export default styles;