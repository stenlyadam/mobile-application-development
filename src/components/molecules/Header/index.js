import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconBack } from '../../../assets/icons'
import { Gap } from '../../atoms'

const Header = ({title, subTitle, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
         <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
           <View style={styles.back}>
             <IconBack />
          </View>
        </TouchableOpacity>
      )}
      <Gap width={26} />
      <View>
      <Text style={styles.text}>{title}</Text>
      <Gap height={2} />
      <Text style={styles.subTxt}>{subTitle}</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingVertical: 38,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    top: 12,
    fontFamily: 'Poppins-Medium',
    color: '#000000'
  },
  back: {
    padding: 10,
  },
  subTxt: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
})