import { StyleSheet } from 'react-native';


import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    margin: 10,
    height: 56,
    width: 56,
  },

  buttonText: {
    color: colors.white,
    fontSize: 24,
  }
})