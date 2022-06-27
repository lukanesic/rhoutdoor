import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>The world of</Text>
      <Text style={styles.title}>RH</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 75,
    left: 20,
    zIndex: 1000,
  },
  subTitle: {
    fontSize: 23,
    fontWeight: '500',
    color: '#fff',
    marginBottom: -25,
  },
  title: {
    fontSize: 100,
    fontWeight: '600',
    color: '#fff',
  },
})
