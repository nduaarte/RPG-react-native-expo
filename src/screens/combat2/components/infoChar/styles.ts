import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 30,
    marginTop: 25,
    backgroundColor: '#bac7d4',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },

  firstInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 7
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#3F3F3F'
  },

  align: {
    alignItems: 'center'
  },

  classText: {
    fontFamily: 'Graduate_400Regular',
    fontSize: 20,
    color: '#9130b0'
    //#1752c5
  },

  breedText: {
    fontFamily: 'Graduate_400Regular',
    fontSize: 15
  },

  imageGold: {
    width: 43,
    height: 43,
  },

  goldText: {
    fontFamily: 'Graduate_400Regular',
    fontSize: 16
  }
})

export default styles;