import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title() {
  return (
    <View style={styles.title}>
      <Title>The world of</Title>
      <Title>RH</Title>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    top: 75,
    left: 20,
    zIndex: 1000,
  },
})
