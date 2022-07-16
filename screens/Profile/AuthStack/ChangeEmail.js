import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import BackIcon from '../../../components/BackIcon'
import Change from '../../../components/profile/user/Change'
import { FloatingLabel } from '../../../components/FloatingLabel'
import ContinueBtn from '../../../components/ContinueBtn'
import ValidationMessage from '../../../components/ValidationMessage'

import { AntDesign } from '@expo/vector-icons'

import { auth } from '../../../firebase'
import { updateEmail, signInWithEmailAndPassword } from '@firebase/auth'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../firebase'

import { useSelector, useDispatch } from 'react-redux'
import { removeUserFromStorage } from '../../../store/userSlice'

export default function ChangeEmail({ navigation }) {
  const [inputs, setInputs] = useState({
    currentPassword: {
      value: '',
      validation: { isValid: true, validationMessage: '' },
    },
    newEmail: {
      value: '',
      validation: { isValid: true, validationMessage: '' },
    },
    repeatEmail: {
      value: '',
      validation: { isValid: true, validationMessage: '' },
    },
  })

  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()

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
            validation: {
              isValid: passwordIsValid,
              validationMessage:
                'Your password must contain more than 7 characters',
            },
          },
          newEmail: {
            value: current.newEmail.value,
            validation: {
              isValid: emailIsValid,
              validationMessage: 'Please enter valid email address',
            },
          },
          repeatEmail: {
            value: current.repeatEmail.value,
            validation: {
              isValid: repeatEmailIsValid,
              validationMessage: `Your email doesn't match. Try again`,
            },
          },
        }
      })
      return
    }

    try {
      // Auth
      const res = await signInWithEmailAndPassword(auth, user.email, currPass)
      const update = await updateEmail(auth.currentUser, newE)

      // DB
      const userRef = doc(db, 'users', user.id)
      const updateUser = await updateDoc(userRef, {
        email: newE,
      })

      setTimeout(() => {
        dispatch(removeUserFromStorage())
        navigation.navigate('Login')
      }, 1000)

      //  VRATI IMPUTE NA NULU
      setInputs(() => {
        return {
          currentPassword: {
            value: '',
            validation: { isValid: true, validationMessage: '' },
          },
          newEmail: {
            value: '',
            validation: { isValid: true, validationMessage: '' },
          },
          repeatEmail: {
            value: '',
            validation: { isValid: true, validationMessage: '' },
          },
        }
      })
    } catch (error) {
      console.log(error.code)
      const wrongPass = error.code === 'auth/wrong-password'

      if (wrongPass) {
        setInputs((current) => {
          return {
            currentPassword: {
              value: current.currentPassword.value,
              validation: {
                isValid: !wrongPass,
                validationMessage: 'Wrong password. Try again',
              },
            },
            newEmail: {
              value: current.newEmail.value,
              validation: {
                isValid: true,
                validationMessage: '',
              },
            },
            repeatEmail: {
              value: current.repeatEmail.value,
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
          title={'Change Email'}
          description={' Your current email address is'}
          bold={`${user.email}`}
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

        {!inputs.currentPassword.validation.isValid && (
          <View style={styles.validateContainer}>
            <AntDesign name='exclamationcircleo' size={12} color='red' />
            <Text style={styles.validate}>
              {inputs.currentPassword.validation.validationMessage}
            </Text>
          </View>
        )}

        <FloatingLabel
          label={'New Email'}
          textConfig={{
            onChangeText: inputHandler.bind(this, 'newEmail'),
          }}
          value={inputs.newEmail.value}
          color={'#000'}
        />
        {!inputs.newEmail.validation.isValid && (
          <View style={styles.validateContainer}>
            <AntDesign name='exclamationcircleo' size={12} color='red' />
            <Text style={styles.validate}>
              {inputs.newEmail.validation.validationMessage}
            </Text>
          </View>
        )}

        <FloatingLabel
          label={'Repeat New Email Address'}
          textConfig={{
            onChangeText: inputHandler.bind(this, 'repeatEmail'),
          }}
          value={inputs.repeatEmail.value}
          color={'#000'}
        />
        {!inputs.repeatEmail.validation.isValid && (
          <View style={styles.validateContainer}>
            <AntDesign name='exclamationcircleo' size={12} color='red' />
            <Text style={styles.validate}>
              {inputs.repeatEmail.validation.validationMessage}
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
