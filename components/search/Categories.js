import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const categories = ['Furniture', 'Lighting', 'Fire&Heat']

export default function Categories({ active, setActive }) {
  return (
    <View style={styles.container}>
      {/* {categories.map((cat, index) => (
        <Pressable key={index} onPress={() => setActive(cat)}>
          <Text style={[styles.text, active === cat && styles.bold]}>
            {cat}
          </Text>
        </Pressable>
      ))} */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    marginTop: 200,
    marginHorizontal: 10,
  },
  text: {
    color: '#fff',
    textTransform: 'uppercase',
    marginRight: 20,
    fontWeight: '200',
    fontSize: 16,
  },
  bold: {
    fontWeight: '500',
  },
})
