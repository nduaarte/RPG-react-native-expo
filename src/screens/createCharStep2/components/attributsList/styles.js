import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  

  pointsLeftContainer: {
    marginTop: 25
  },

  pointsText: {
    fontFamily: 'Graduate_400Regular',
    fontSize: 16,
    alignSelf: 'center',
  },

  pointsLeft: {
    fontFamily: 'Graduate_400Regular',
    fontSize: 50,
    alignSelf: 'center'
  },

  container: {
    marginHorizontal: 15
  },

  attribute: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },

  textAttribute: {
    fontFamily: 'Graduate_400Regular',
    fontSize: 22,
    marginLeft: 5
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  valueContainer: {
    backgroundColor: '#D1D1D1',
    paddingHorizontal: 30,
    paddingVertical: 6,
    borderRadius: 7,
    margin: 5
  },

  value: {
    fontFamily: 'Graduate_400Regular',
    fontSize: 20
  }
})

export default styles;