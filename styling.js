import { StyleSheet } from 'react-native';

// Testing feature, ignore.
// module.exports = {
//   accentColour: '#00A896',
//   backgroundColour: '#2C2F33',
//   defaultFont: 'Monserrat',
// };

const accentColour = '#00A896';
const backgroundColour = '#2C2F33';
const defaultFont = 'Monserrat';

module.exports = StyleSheet.create({
  mainContainerBlock: {
    padding: 10,
    borderRadius: 5,
    width: '90%',
    height: '98%',
    backgroundColor: backgroundColour,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //VIEW
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: accentColour,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  //TEXT
  titleText: {
    color: 'white',
    padding: 10,
    fontSize: 40,
    fontFamily: defaultFont,
    fontWeight: 'bold',
  },
  defaultText: {
    fontFamily: defaultFont,
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
    backgroundColor: accentColour,
    borderWidth: 0,
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
});
