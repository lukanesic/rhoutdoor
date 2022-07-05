import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import React from 'react'

const width = Dimensions.get('window').width / 2 - 25

export default function Card({ item, color, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.card} onPress={onPress}>
      <View style={styles.image} />
      <View>
        <Text style={[styles.text, color && { color: color }]}>
          Ottoman Lounge Chair
        </Text>
        <Text style={[styles.text, color && { color: color }]}>$3.500</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 320,
    width: width,
    marginHorizontal: 1,
    marginBottom: 10,
  },

  image: {
    height: 250,
    backgroundColor: '#cecece',
    width: '100%',
  },
  text: {
    marginTop: 5,
  },
})
