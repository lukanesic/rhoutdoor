import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons'

export default function CloseIcon({ onPress, color }) {
  return (
    <TouchableOpacity style={styles.close} onPress={onPress}>
      <AntDesign name='close' size={24} color={`${color ? color : 'black'}`} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  close: {
    position: 'absolute',
    top: 50,
    left: 25,
  },
})
