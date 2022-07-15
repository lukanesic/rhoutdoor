import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

import Title from '../../components/Title'
import Form from '../../components/profile/login/Form'

import CloseIcon from '../../components/CloseIcon'

export default function CartLogin({ navigation }) {
  return (
    <ScrollView style={styles.loginContainer}>
      <CloseIcon
        color={'white'}
        onPress={() => navigation.navigate('CartScreen')}
      />
      <Title />
      {/* Uslov gde salje dalje */}
      <Form navigation={navigation} unset navigateLocation={`Summary`} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
})
