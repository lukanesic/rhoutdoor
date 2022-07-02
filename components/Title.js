import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title({ color }) {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.subTitle, color ? { color: color } : { color: '#fff' }]}
      >
        The world of
      </Text>
      <Text
        style={[styles.title, color ? { color: color } : { color: '#fff' }]}
      >
        RH
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 95,
    left: 20,
    zIndex: 1000,
  },
  subTitle: {
    fontSize: 23,
    fontWeight: '500',
    marginBottom: -25,
  },
  title: {
    fontSize: 100,
    fontWeight: '600',
  },
})
