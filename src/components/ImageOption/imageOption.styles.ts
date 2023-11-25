import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  optionContainer: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: 'lightgrey',
    borderRadius: 15,
    width: '45%',
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  optionImage: {
    width: '100%',
    flex: 1,
    resizeMode: 'contain'
  },
  optionText: {
    fontSize: 20,
    fontWeight: 'bold' // 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  },
  selectedContainer: {
    backgroundColor: '#DDF4FE',
    borderColor: '#81D5FE'
  },
  selectedText: {
    color: '#81D5FE',
    fontWeight: 'bold'
  }
});

export default styles;
