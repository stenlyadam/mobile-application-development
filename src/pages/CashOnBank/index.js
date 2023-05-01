import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, Gap, TextInput, Button, Label } from '../../components'
import React from 'react'

const CashOnBank = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <Header style={{flex:1}} title="Cash On Bank" onBack={() => navigation.goBack()} />
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <TextInput title="Description" placeholder="Add the description" />
        <Gap height={17} />
        <TextInput title="Type" placeholder="Debit / Credit" />
        <Gap height={22} />
        <Button title="Save" />
        <Gap height={52} />
      </View>
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <Label title="Last 3 Transaction" textFam="Poppins-Bold" textSize={16} />
        <View style={styles.contentWrapper1}>
          <View>
            <Text style={styles.text1}>17 April 2020</Text>
            <Text style={styles.text2}>Water, Food</Text>
          </View>
          <View>
            <Text style={styles.hargaMasuk}>-Rp.300.000</Text>
          </View>
        </View>
        <View style={styles.contentWrapper1}>
          <View>
            <Text style={styles.text1}>18 April 2020</Text>
            <Text style={styles.text2}>Office supplies</Text>
          </View>
          <View>
            <Text style={styles.hargaMasuk}>-Rp.300.000</Text>
          </View>
        </View>
        <View style={styles.contentWrapper1}>
          <View>
            <Text style={styles.text1}>19 April 2020</Text>
            <Text style={styles.text2}>Top up</Text>
          </View>
          <View>
            <Text style={styles.hargaKeluar}>+Rp.300.000</Text>
          </View>
        </View>
      </View> 
      <Gap height={35} />
    </ScrollView>
  )
}

export default CashOnBank

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
  contentWrapper1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    marginTop: 10,
    paddingTop: 11,
    padding: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  hargaMasuk: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#D9435E',
    alignItems: 'flex-end',
  },
  hargaKeluar: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#1ABC9C',
    alignItems: 'flex-end',
  },
  text1: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  text2: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
})