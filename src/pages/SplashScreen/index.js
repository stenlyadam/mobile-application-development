import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import Logo from '../../assets/icons/Vector.svg'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
        <Logo width={114} height={114} />
      <Text style={styles.text}>Money Tracker</Text>
    </View>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#02CF8E',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      text: {
          fontSize: 32,
          lineHeight: 48,
          fontFamily: 'Poppins-Medium',
      }
})