import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import BackIcon from '../../../components/BackIcon'
import Title from '../../../components/Title'
import RForm from '../../../components/profile/recovery/RForm'

export default function Recovery({ navigation }) {
  return (
    <>
      {/* GOBACK SOLUTION */}
      <BackIcon onPress={() => navigation.replace('Login')} />
      <ScrollView style={styles.recoveryContainer}>
        <Title color={'#000'} />
        <RForm />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  recoveryContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
