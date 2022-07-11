import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
} from 'react-native'
import React from 'react'

export default function Loading({ bg, color, marginTop }) {
  return (
    <View
      style={{
        backgroundColor: bg,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator
        color={color}
        size={'small'}
        style={{ marginTop: marginTop }}
      />
    </View>
  )
}
