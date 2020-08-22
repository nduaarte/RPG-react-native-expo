import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    alignItems: 'center',
    marginBottom: 50
  },

  title: {
    fontFamily: 'Graduate_400Regular',
    fontSize: 22,
    marginBottom: 5
  },

  classContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    backgroundColor: '#D1D1D1',
    padding: 10,
    borderRadius: 7
  },

  class: {
    margin: 15,
    alignItems: 'center'
  },

  avatar: {
    width: 55,
    height: 55
  },

  nameClass: {
    fontFamily: 'Graduate_400Regular',
    fontSize: 14,
    marginTop: 3,
    color: '#403E3E'
  }
})

export default styles;