import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function TotalPayCard({ item }) {
  return (
    <View
      style={{
        width: 130,
        marginRight: 10,
        marginTop: 10,
      }}
    >
      <Image
        style={{ width: '100%', height: 200 }}
        source={{ uri: item.images[1] }}
      />
      <View style={styles.wishCardDescription}>
        <Text
          style={{
            fontWeight: '300',
            textTransform: 'uppercase',
            fontSize: 12,
            marginTop: 10,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontWeight: '300',
            textTransform: 'uppercase',
            fontSize: 12,
            marginTop: 5,
          }}
        >
          ${item.price}
        </Text>

        <Text
          style={{
            fontWeight: '500',
            textTransform: 'uppercase',
            fontSize: 12,
            marginTop: 15,
          }}
        >
          X {item.qty} {item.qty > 1 ? 'Items' : 'Item'}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wishCardDescription: {},

  btnText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 10,
    color: '#fff',
  },
})
