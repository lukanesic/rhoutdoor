import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Title from './../components/Title'
import Form from '../components/profile/Form'
import Help from '../components/profile/Help'

export default function Profile() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
      <Help />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
})
