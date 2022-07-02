import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import BackIcon from '../../../components/BackIcon'
import Change from '../../../components/profile/user/Change'
import { FloatingLabel } from '../../../components/FloatingLabel'
import ContinueBtn from '../../../components/ContinueBtn'
import ValidationMessage from '../../../components/ValidationMessage'

export default function ChangePassword({ navigation }) {
  const [inputs, setInputs] = useState({
    email: { value: 'customer@gmail.com', isValid: true },
    oldPassword: { value: '', isValid: true },
    newPassword: { value: '', isValid: true },
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
    const oldPassword = inputs.oldPassword.value
    const newPassword = inputs.newPassword.value

    const passwordIsValid = oldPassword.length >= 7
    const newPasswordIsValid = newPassword.length >= 7

    if (!passwordIsValid || !newPassword) {
      setInputs((current) => {
        return {
          email: {
            value: 'customer@gmail.com',
            isValid: true,
          },
          oldPassword: {
            value: current.oldPassword.value,
            isValid: passwordIsValid,
          },
          newPassword: {
            value: current.newPassword.value,
            isValid: newPasswordIsValid,
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
          title={'Change Password'}
          description={
            'If you wish to change the password, please provide the following information:'
          }
        />

        <FloatingLabel
          label={'Old Password'}
          textConfig={{
            onChangeText: inputHandler.bind(this, 'oldPassword'),
            secureTextEntry: true,
          }}
          value={inputs.oldPassword.value}
          color={'#000'}
        />
        {!inputs.oldPassword.isValid && (
          <ValidationMessage
            message={'Your password must contain more than 7 characters'}
          />
        )}

        <FloatingLabel
          label={'New password'}
          textConfig={{
            onChangeText: inputHandler.bind(this, 'newPassword'),
            secureTextEntry: true,
          }}
          value={inputs.newPassword.value}
          color={'#000'}
        />
        {!inputs.newPassword.isValid && (
          <ValidationMessage
            message={'Your password must contain more than 7 characters'}
          />
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
