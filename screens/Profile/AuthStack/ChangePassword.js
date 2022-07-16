import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import BackIcon from '../../../components/BackIcon'
import Change from '../../../components/profile/user/Change'
import { FloatingLabel } from '../../../components/FloatingLabel'
import ContinueBtn from '../../../components/ContinueBtn'
import ValidationMessage from '../../../components/ValidationMessage'

import { auth } from '../../../firebase'
import { signInWithEmailAndPassword, updatePassword } from '@firebase/auth'

import { AntDesign } from '@expo/vector-icons'
import { useSelector } from 'react-redux'

export default function ChangePassword({ navigation }) {
  const { user } = useSelector((state) => state.user)

  const [inputs, setInputs] = useState({
    oldPassword: {
      value: '',
      validation: {
        isValid: true,
        validationMessage: '',
      },
    },
    newPassword: {
      value: '',
      validation: { isValid: true, validationMessage: '' },
    },
  })

  const inputHandler = (identifier, val) => {
    setInputs((current) => {
      return {
        ...current,
        [identifier]: {
          value: val,
          validation: { isValid: true, validationMessage: '' },
        },
      }
    })
  }

  const onSubmit = async () => {
    const oldPassword = inputs.oldPassword.value
    const newPassword = inputs.newPassword.value

    const passwordIsValid = oldPassword.length >= 7
    const newPasswordIsValid = newPassword.length >= 7

    if (!passwordIsValid || !newPassword) {
      setInputs((current) => {
        return {
          oldPassword: {
            value: current.oldPassword.value,
            validation: {
              isValid: passwordIsValid,
              validationMessage:
                'Your password must contain more than 7 characters',
            },
          },
          newPassword: {
            value: current.newPassword.value,
            validation: {
              isValid: newPasswordIsValid,
              validationMessage:
                'Your password must contain more than 7 characters',
            },
          },
        }
      })
      return
    }

    try {
      const res = await signInWithEmailAndPassword(
        auth,
        user.email,
        oldPassword
      )
      await updatePassword(auth.currentUser, newPassword)
      setTimeout(() => {
        navigation.navigate('ManageAccount')
      }, 1000)
    } catch (error) {
      console.log(error.code)
      const wrongPass = error.code === 'auth/wrong-password'

      if (wrongPass) {
        setInputs((current) => {
          return {
            oldPassword: {
              value: current.oldPassword.value,
              validation: {
                isValid: !wrongPass,
                validationMessage: 'Wrong password. Try again',
              },
            },
            newPassword: {
              value: current.newPassword.value,
              validation: {
                isValid: true,
                validationMessage: '',
              },
            },
          }
        })
      }
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
        {!inputs.oldPassword.validation.isValid && (
          <View style={styles.validateContainer}>
            <AntDesign name='exclamationcircleo' size={12} color='red' />
            <Text style={styles.validate}>
              {inputs.oldPassword.validation.validationMessage}
            </Text>
          </View>
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
        {!inputs.newPassword.validation.isValid && (
          <View style={styles.validateContainer}>
            <AntDesign name='exclamationcircleo' size={12} color='red' />
            <Text style={styles.validate}>
              {inputs.newPassword.validation.validationMessage}
            </Text>
          </View>
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
  validateContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  validate: {
    color: '#ff1c1b',

    fontSize: 12,
    marginLeft: 5,
  },
})
