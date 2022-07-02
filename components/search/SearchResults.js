import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Card from '../Card'

const arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 0, 0, 5, 52, 35, 346, 346, 457, 56, 45, 656,
  856, 75, 68, 6, 3, 38, 5, 78, 356, 8,
]

export default function SearchResults() {
  return (
    <>
      <Text
        style={{
          color: '#fff',
          marginLeft: 25,
          marginTop: 40,
          marginBottom: 15,
        }}
      >
        {arr.length} Results
      </Text>
      <FlatList
        data={arr}
        keyExtractor={(_, index) => index.toString()}
        numColumns='2'
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }, index) => <Card item={item} key={index} />}
        style={{
          backgroundColor: '#000',
          paddingHorizontal: 17,
          paddingTop: 20,
        }}
      />
    </>
  )
}
