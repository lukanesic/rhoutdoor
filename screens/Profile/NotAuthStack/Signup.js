import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import BackIcon from '../../../components/BackIcon'
import Title from '../../../components/Title'
import SForm from '../../../components/profile/signup/SForm'
import Latest from '../../../components/profile/signup/Latest'

export default function Signup({ navigation }) {
  return (
    <>
      {/* GO BACK NADJI RESENJE */}
      <BackIcon onPress={() => navigation.navigate('Login')} />

      <ScrollView style={styles.signupContainer}>
        <Title color={'#000'} />
        <SForm navigation={navigation} />
        <Latest />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  signupContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
