import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'

import { FloatingLabel } from '../../FloatingLabel'

import { AntDesign } from '@expo/vector-icons'
import { auth } from '../../../firebase'
import { signInWithEmailAndPassword } from '@firebase/auth'
import { useDispatch } from 'react-redux'
import { fetchUser } from '../../../store/userSlice'

export default function Form({ navigation }) {
  const [inputs, setInputs] = useState({
    email: {
      value: '',
      validation: { isValid: true, validationMessage: '' },
    },
    password: {
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

  const dispatch = useDispatch()

  const onSubmit = async () => {
    const email = inputs.email.value
    const password = inputs.password.value

    const emailIsValid = email.includes('@')
    const passwordIsValid = password.length > 0

    if (!emailIsValid || !passwordIsValid) {
      setInputs((current) => {
        return {
          email: {
            value: current.email.value,
            validation: {
              isValid: emailIsValid,
              validationMessage: 'Please enter a valid email address',
            },
          },
          password: {
            value: current.password.value,
            validation: {
              isValid: passwordIsValid,
              validationMessage: 'Please enter your password',
            },
          },
        }
      })
      return
    }

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      // dispatch(fetchUser({ email: user.email, token: user.accessToken }))
      // navigation.navigate('SignupSuccess')

      console.log(user)

      // setTimeout(() => {
      //   setInputs(() => {
      //     return {
      //       email: {
      //         value: '',
      //         validation: { isValid: true, validationMessage: '' },
      //       },
      //       password: {
      //         value: '',
      //         validation: { isValid: true, validationMessage: '' },
      //       },
      //     }
      //   })
      // }, 2000)
    } catch (error) {
      console.log(error.code)

      const invalidEmail = error.code === 'auth/invalid-email'
      const userNotExist = error.code === 'auth/user-not-found'
      const wrongPass = error.code === 'auth/wrong-password'

      setInputs((current) => {
        return {
          email: {
            value: current.email.value,
            validation: {
              isValid: !invalidEmail,
              validationMessage: 'Invalid email. Try again',
            },
          },
          password: {
            value: current.password.value,
            validation: {
              isValid: !wrongPass,
              validationMessage: 'Wrong password. Try again',
            },
          },
        }
      })

      // setInputs((current) => {
      //   return {
      //     email: {
      //       value: current.email.value,
      //       validation: { isValid: !email, validationMessage: error.code },
      //     },
      //     password: {
      //       value: current.password.value,
      //       validation: {
      //         isValid: !password,
      //         validationMessage: error.code,
      //       },
      //     },
      //   }
      // })
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log in</Text>
      <View style={styles.form}>
        <FloatingLabel
          label={'Email'}
          validation={inputs.email.validation.isValid}
          value={inputs.email.value}
          textConfig={{
            onChangeText: inputHandler.bind(this, 'email'),
          }}
        />
        {!inputs.email.validation.isValid && (
          <View style={styles.validateContainer}>
            <AntDesign name='exclamationcircleo' size={12} color='red' />
            <Text style={styles.validate}>
              {inputs.email.validation.validationMessage}
            </Text>
          </View>
        )}

        <FloatingLabel
          label={'Password'}
          value={inputs.password.value}
          validation={inputs.password.validation.isValid}
          textConfig={{
            onChangeText: inputHandler.bind(this, 'password'),
            secureTextEntry: true,
          }}
        />
        {!inputs.password.validation.isValid && (
          <View style={styles.validateContainer}>
            <AntDesign name='exclamationcircleo' size={12} color='red' />
            <Text style={styles.validate}>
              {inputs.password.validation.validationMessage}
            </Text>
          </View>
        )}
      </View>
      {/* REUSABLE !!!  */}
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.7}
        onPress={onSubmit}
      >
        <Text style={styles.btnTxt}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Recovery')}>
        <Text style={styles.li}>Have you forgotten your password?</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 45,
    marginTop: 220,
    marginRight: 45,
  },
  header: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: '500',
  },
  form: {
    marginTop: 30,
  },
  btn: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 20,
  },
  btnTxt: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  li: {
    color: '#fff',
    fontSize: 10,
    textTransform: 'uppercase',
  },

  inputContainer: {
    paddingTop: 5,
  },
  icon: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
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
