import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'

export default function ForwardScreen({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.screensContainer} onPress={onPress}>
      <Text style={styles.screenTxt}>{title}</Text>
      <MaterialIcons name='arrow-forward-ios' size={18} color='gray' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  screensContainer: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  screenTxt: {
    fontWeight: 'bold',
    marginVertical: 5,
    textTransform: 'uppercase',
    color: '#282828',
    fontSize: 12,
  },
})
