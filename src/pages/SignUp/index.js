import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Button, Gap, Header, TextInput} from '../../components'

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign Up" onBack={() => navigation.goBack()}/>
      <View style={styles.contentWrapper}>
        <View style={styles.avatarWrapper}>
            <View style={styles.border}>
                <View style={styles.addPhoto}>
                    <Text style={styles.addPhotoText}>Add Photo</Text>
                </View> 
            </View>
        </View>
        <TextInput title="Full Name" placeholder="Enter your full name"/>
        <Gap height={16} />
        <TextInput title="Email Address" placeholder="Enter your email address"/>
        <Gap height={16} />
        <TextInput title="Password" placeholder="Enter your password"/>
        <Gap height={24} />
        <Button 
            title="Continue"
            onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    contentWrapper: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 26, 
        marginTop: 24,
    },
    addPhoto: {
        height: 90,
        width: 90,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
    },
    addPhotoText: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        maxWidth: 40,
        textAlign: 'center'
    },
    border: {
        borderWidth: 1,
        borderColor: '#8D92A3',
        width: 110,
        height: 110,
        borderRadius: 110,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dashed'
    },
    avatarWrapper: {
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 12,
    }
})