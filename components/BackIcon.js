import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons'

export default function BackIcon({ onPress }) {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.icon}>
        <Ionicons name='arrow-back' size={34} color='black' />
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1000,
  },
})
