import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ContinueBtn({ onPress, title, color }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.continue}>
      <Text style={[styles.continueTxt, color && { color: color }]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  continue: {
    position: 'absolute',
    top: 55,
    right: 20,
    zIndex: 1000,
    padding: 10,
  },
  continueTxt: {
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
})
