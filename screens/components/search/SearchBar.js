import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='ENTER SEARCH TERMS'
        placeholderTextColor='#fff'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  input: {
    width: '100%',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginHorizontal: 25,
    fontWeight: '400',
    color: '#fff',
  },
})
