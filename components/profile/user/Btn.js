import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Btn({ onPress, title }) {
  return (
    <TouchableOpacity
      style={styles.manageBtn}
      onPress={onPress}
      activeOpacity={0.6}
    >
      {/* LOGOUT */}
      <Text style={styles.manageBtnTxt}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  manageBtn: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginVertical: 40,
    backgroundColor: '#000',
  },
  manageBtnTxt: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 12,
  },
})
