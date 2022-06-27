import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

export default function Form() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log in</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder={'EMAIL'}
          placeholderTextColor='#a2a2a2'
        />
        <TextInput
          style={styles.input}
          placeholder={'PASSWORD'}
          placeholderTextColor='#a2a2a2'
        />
      </View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
        <Text style={styles.btnTxt}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.li}>Have you forgotten your password?</Text>
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
  form: {},
  input: {
    paddingVertical: 15,
    marginVertical: 10,
    borderBottomColor: '#a2a2a2',
    borderBottomWidth: 1,
    color: '#fff',
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
})
