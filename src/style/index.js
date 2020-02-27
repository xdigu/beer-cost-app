import { StyleSheet, Platform } from 'react-native'

const colors = {
  background: '#FFFF40'
}

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  images: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20
  },
  title: {
    fontSize: 35,
    fontFamily: Platform.OS === 'ios' ? "AlNile-Bold" : "Roboto",
    alignSelf: 'center',
    marginTop: 40
  },
  description: {
    alignSelf: 'center',
    padding: 5,
    marginTop: 20,
    marginHorizontal: 10
  },
  describe: {
    alignItems: 'center'
  },
  beerName: {
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  beerContainer: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    width: '40%'
  },
  divideBar: {
    borderLeftWidth: 1,
    borderColor: 'rgba(158, 150, 150, .2)'
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: 130,
    alignItems: 'center',
    paddingVertical: 8,
    marginTop: 10,
    backgroundColor: 'black'
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  safeAreaViewTop: {
    flex: 0,
    backgroundColor: colors.background
  },
  safeAreaViewBotton: {
    flex: 1,
    backgroundColor: colors.background
  },
  resultContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  }
})
