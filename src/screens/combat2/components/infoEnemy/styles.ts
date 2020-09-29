import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 30
  },

  imageBG: {
    width: 350,
    height: 200,
    borderRadius: 5,
    position: 'absolute'
  },

  lifeContainer: {
    alignSelf: 'flex-start',
    width: '79%',
    marginTop: 5,
    opacity: 0.9
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  text: {
    fontFamily: 'Graduate_400Regular',
    color: '#fff',
    fontSize: 18
  },

  enemyContainer: {
    marginTop: 22,
    alignItems: 'center'
  },

  enemyTitle: {
    fontFamily: 'Graduate_400Regular',
    color: '#fff',
    fontSize: 22
  },

  enemyImage: {
    width: 100,
    height: 100,
  }
});

export default styles;