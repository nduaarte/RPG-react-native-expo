import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#000',
    opacity: 0.8,
    marginHorizontal: 30,
    borderRadius: 7,
    marginTop: 40
  },

  title: {
    fontFamily: 'Graduate_400Regular',
    fontSize: 28,
    marginVertical: 20,
    color: '#fff'
  },

  damageContainer: {
    flexDirection: 'row'
  },

  lifeContainer: {
    marginVertical: 30
  },

  text: {
    fontFamily: 'Graduate_400Regular',
    color: '#fff',
    fontSize: 22
  },

  textLife: {
    fontFamily: 'Graduate_400Regular',
    color: '#fff',
    fontSize: 16
  }
});

export default styles;