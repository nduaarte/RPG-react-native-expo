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

  containerBreeds: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#D1D1D1',
    padding: 10,
    borderRadius: 7
  },

  breed: {
    margin: 15,
    alignItems: 'center',
  },
  
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#403E3E',
    backgroundColor: '#D1D1D1'
  },

  breedName: {
    fontFamily: 'Graduate_400Regular',
    fontSize: 14,
    marginTop: 3,
    color: '#403E3E'
  },

  elf: {
    color: 'red'
  }
});

export default styles;