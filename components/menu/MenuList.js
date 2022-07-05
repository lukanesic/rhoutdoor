import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function MenuList({ index, item, onPress }) {
  return (
    <TouchableOpacity key={index} onPress={onPress}>
      <Text style={styles.category}>{item}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  category: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: '300',
    textTransform: 'uppercase',
  },
})
