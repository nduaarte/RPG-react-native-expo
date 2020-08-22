import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#205FA8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center'
  },

  stepPins: {
    flexDirection: 'row',
  },

  pins: {
    marginHorizontal: 7,
    color: '#fff'
  },

  current: {
    color: '#3E8BFF'
  },

  arrow: {
    color: '#fff'
  }
})

export default styles;