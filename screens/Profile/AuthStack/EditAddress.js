import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Change from '../../../components/profile/user/Change'
import BackIcon from '../../../components/BackIcon'
import { FloatingLabel } from '../../../components/FloatingLabel'
import ContinueBtn from '../../../components/ContinueBtn'

export default function EditAddress({ navigation }) {
  return (
    <>
      <BackIcon onPress={() => navigation.replace('ManageAddress')} />
      <ContinueBtn
        title={'Save'}
        onPress={() => console.log('Save address Func')}
      />
      <ScrollView style={styles.container}>
        <Change title={'edit address'} />
        <FloatingLabel
          label={'Name'}
          textConfig={''}
          value={''}
          color={'#cecece'}
        />
        <FloatingLabel
          label={'Surname'}
          textConfig={''}
          value={''}
          color={'#cecece'}
        />
        <FloatingLabel
          label={'Address'}
          textConfig={''}
          value={''}
          color={'#cecece'}
        />
        <FloatingLabel
          label={'City'}
          textConfig={''}
          value={''}
          color={'#cecece'}
        />
        <FloatingLabel
          label={'Country'}
          textConfig={''}
          value={''}
          color={'#cecece'}
        />
        <FloatingLabel
          label={'Post Code'}
          textConfig={''}
          value={''}
          color={'#cecece'}
        />

        <FloatingLabel
          label={'Phone'}
          textConfig={''}
          value={''}
          color={'#cecece'}
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100,
    paddingHorizontal: 25,
  },
})
