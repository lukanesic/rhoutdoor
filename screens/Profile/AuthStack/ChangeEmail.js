import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import BackIcon from '../../../components/BackIcon'
import Change from '../../../components/profile/user/Change'
import { FloatingLabel } from '../../../components/FloatingLabel'
import ContinueBtn from '../../../components/ContinueBtn'
import ValidationMessage from '../../../components/ValidationMessage'

export default function ChangeEmail({ navigation }) {
  const [inputs, setInputs] = useState({
    currentPassword: { value: '', isValid: true },
    newEmail: { value: '', isValid: true },
    repeatEmail: { value: '', isValid: true },
  })

  const inputHandler = (identifier, val) => {
    setInputs((current) => {
      return {
        ...current,
        [identifier]: { value: val, isValid: true },
      }
    })
  }

  const onSubmit = () => {
    const currPass = inputs.currentPassword.value
    const newE = inputs.newEmail.value
    const repeat = inputs.repeatEmail.value

    const passwordIsValid = currPass.length >= 7
    const emailIsValid = newE.includes('@')
    const repeatEmailIsValid = newE === repeat

    if (!passwordIsValid || !emailIsValid || !repeatEmailIsValid) {
      setInputs((current) => {
        return {
          currentPassword: {
            value: current.currentPassword.value,
            isValid: passwordIsValid,
          },
          newEmail: { value: current.newEmail.value, isValid: emailIsValid },
          repeatEmail: {
            value: current.repeatEmail.value,
            isValid: repeatEmailIsValid,
          },
        }
      })
      return
    }
  }

  return (
    <>
      <BackIcon onPress={() => navigation.navigate('ManageAccount')} />

      <ContinueBtn onPress={onSubmit} title={'Save'} />

      <ScrollView style={styles.manageContainer}>
        <Change
          title={'Change Email'}
          description={' Your current email address is'}
          bold={'customer@gmail.com'}
        />

        {/* RESITI STATE ZA OVO */}
        <FloatingLabel
          label={'Current Password'}
          textConfig={{
            onChangeText: inputHandler.bind(this, 'currentPassword'),
            secureTextEntry: true,
          }}
          value={inputs.currentPassword.value}
          color={'#000'}
        />
        {!inputs.currentPassword.isValid && (
          <ValidationMessage
            message={'Your password must contain more than 7 characters'}
          />
        )}

        <FloatingLabel
          label={'New Email'}
          textConfig={{
            onChangeText: inputHandler.bind(this, 'newEmail'),
          }}
          value={inputs.newEmail.value}
          color={'#000'}
        />
        {!inputs.newEmail.isValid && (
          <ValidationMessage message={'Please enter valid email address'} />
        )}

        <FloatingLabel
          label={'Repeat New Email Address'}
          textConfig={{
            onChangeText: inputHandler.bind(this, 'repeatEmail'),
          }}
          value={inputs.repeatEmail.value}
          color={'#000'}
        />
        {!inputs.repeatEmail.isValid && (
          <ValidationMessage message={`Your email doesn't match. Try again`} />
        )}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  manageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100,
    paddingHorizontal: 25,
  },
})
