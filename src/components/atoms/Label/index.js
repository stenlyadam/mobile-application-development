import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Label = ({title, textFam = 'Poppins-Medium', textSize = 14, mL, mT}) => {
  return <Text style={styles.txt(textFam, textSize, mL, mT)}>{title}</Text>;
};

export default Label;

const styles = StyleSheet.create({
  txt: (textFam, textSize, mL, mT) => ({
    fontFamily: textFam,
    fontSize: textSize,
    color: '#000000',
    marginLeft: mL,
    marginTop: mT,
  }),
});