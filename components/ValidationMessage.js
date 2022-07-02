import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons'

export default function ValidationMessage({ message }) {
  return (
    <View style={styles.validateContainer}>
      <AntDesign name='exclamationcircleo' size={12} color='red' />
      <Text style={styles.validate}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
