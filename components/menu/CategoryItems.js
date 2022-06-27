import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CategoryItems({ active, setActive }) {
  return (
    <View>
      <Text>{active}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
