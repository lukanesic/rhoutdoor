import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

import { FloatingLabel } from '../../FloatingLabel'

export default function RForm() {
  const [email, setEmail] = useState('')

  const onSubmit = () => {
    console.log('nesto')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <FloatingLabel
        label={'Email'}
        value={email}
        textConfig={{
          onChangeText: (value) => setEmail(value),
        }}
        color={'#000'}
      />
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.7}
        onPress={onSubmit}
      >
        <Text style={styles.btnTxt}>RESET PASSWORD</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 220,
    marginLeft: 45,
    marginRight: 45,
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
  btn: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#000',
    padding: 12,
    marginVertical: 20,
  },
  btnTxt: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '500',
    color: '#fff',
  },
})
