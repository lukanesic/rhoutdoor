import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('window')

export default function Stores() {
  return (
    <View style={styles.container}>
      <Text>Currenty Unavailable. Coming Soon</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width,
    paddingHorizontal: 30,
  },
})
