import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const suggestions = ['']

export default function Trends({ search, setSearch }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trends</Text>
      <View style={styles.links}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  title: {},
  links: {},
})
