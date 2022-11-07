import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  mainContainerBlock: {
    padding: 10,
    borderRadius: 5,
    width: '90%',
    height: '98%',
    backgroundColor: globalColours.backgroundColour,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //VIEW
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: globalColours.accentColour,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  //TEXT
  titleText: {
    color: 'white',
    padding: 10,
    fontSize: 40,
    fontFamily: globalColours.defaultFont,
    fontWeight: 'bold',
  },
  defaultText: {
    fontFamily: globalColours.defaultFont,
    color: 'white',
    fontSize: 20,
    textAlign: 'left',
  },
  //TextInput
  userTextInput: {
    padding: 5,
    margin: 10,
    borderColor: 'white',
    borderWidth: 0.75,
    borderRadius: 5,
    height: '7%',
    width: '65%',
    fontStyle: 'italic',
    textColor: 'white',
  },
  pressableButton: {
    backgroundColor: globalColours.accentColour,
    borderWidth: 0,
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
});
