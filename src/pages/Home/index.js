import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import {Header, Gap, Label, Button}  from '../../components';
import { HomeButton, List, Profile } from '../../assets';

const Home = ({navigation}) => {
  return (
      <ScrollView style={styles.page} >
          <Header title="Money Tracker" subTitle="Track your money"/>
          <Profile style={styles.profilePic} />
          <Gap height={20} />
        <View style={styles.contentWrapper}>
          <Gap height={13} />
          <Label title="Your Balance" textSize={16} mL={24} />
          <Gap height={4} />
          <Label title="Rp. 10.000.000" textFam="Poppins-SemiBold" textSize={24} mL={93} />
          <Gap height={18} />
          <View style={styles.borderLine} />
          <Gap height={20} />
          <View style={{flexDirection: 'row'}}>
          <Label title="Cash on Hand" textFam="Poppins-Regular" mL={20} />
          <Gap width={20} />
          <Text></Text>
          <Label title="Rp. 4.000.000" />
          </View>
          <Gap height={11} />
          <View style={{flexDirection: 'row'}}>
          <Label title="Cash on Bank" textFam="Poppins-Regular" mL={20} />
          <Gap width={18} />
          <Label title="Rp. 6.000.000" />
          </View>
        </View>
        <Gap height={20} />
        <View style={styles.contentWrapper}>
          <Gap height={10.6} />
          <Label title="Add Transaction" textSize={16} mL={24} />
          <Gap height={8.81} />
          <Button
            title="Cash On Hand"
            onPress={() => navigation.navigate('CashOnHand')}
          />
          <Gap height={18.04} />
          <Button
            title="Cash On Bank"
            onPress={() => navigation.navigate('CashOnBank')}
          />
          <Gap height={71.27} />
        </View>
        <Gap height={25} />
        <View style={styles.contentWrapper}>
          <View style={styles.footer}>
            <View style={styles.footer2}>
              <HomeButton/>
              <List style={styles.listStyle} />
            </View>
          </View>
          <Gap height={12} />
        </View>
        
      </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
    page:{
        flex: 1,
    },
    contentWrapper: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 26, 
    },
    profilePic: {
      height: '127,5',
      height: 85,
      position: 'absolute',
      left: 310,
      top: 40,
    },
    borderLine: {
      left: 24, 
      width: 311, 
      borderBottomWidth: 1
    },
    footer: {
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
    },
    footer2: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 50,
    },
    listStyle: {
      paddingLeft: 300,
    },
    
      
})