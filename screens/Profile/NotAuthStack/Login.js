import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import Title from '../../../components/Title'
import Form from '../../../components/profile/login/Form'
import Help from '../../../components/profile/login/Help'

export default function Login({ navigation }) {
  return (
    <ScrollView style={styles.loginContainer}>
      <Title />
      <Form navigation={navigation} />
      <Help navigation={navigation} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
})
