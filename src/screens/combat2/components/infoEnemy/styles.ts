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
    fontSize: 23
  },

  textBloodEnemy: {
    fontFamily: 'Graduate_400Regular',
    position: 'absolute',
    fontSize: 30,
    left: 30,
    color: '#CC1F1F',
    alignSelf: 'flex-end',
    top: -60
  },

  enemyImage: {
    width: 100,
    height: 100,
  },

  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },

  modalSquare: {
    margin: 20,
    backgroundColor: '#ffff',
    padding: 25,
    borderRadius: 10,
    justifyContent: 'space-between',
    height: 250,
    width: 300,
    alignItems: 'center',
    shadowOffset: {
      width: 8,
      height: 8
    },
    shadowColor: '#1a1a1a',
    shadowOpacity: 0.4
  },

  modalTitle: {
    fontFamily: 'Graduate_400Regular',
    fontSize: 28,
    color: '#1f0707'
    },

  modalText: {
    fontSize: 16,
    color: '#121212'
  },

  modalImage: {
    width: 50,
    height: 50
  },

  modalButton: {
    backgroundColor: '#5bab6f',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 35,
    alignItems: 'center',
  },
  
  modalButtonText: {
    fontSize: 18,
    color: '#ededed',
    fontWeight: 'bold'
  },

  modalTextXp: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5aace0'
  }
});

export default styles;