import { StyleSheet, FlatList } from 'react-native'
import React from 'react'

import Card from './Card'

export default function CardList({
  data,
  background,
  color,
  marginTop,
  onPress,
}) {
  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      numColumns='2'
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }, index) => (
        <Card item={item} key={index} color={color} onPress={onPress} />
      )}
      style={{
        backgroundColor: background,
        paddingHorizontal: 17,
        paddingTop: 20,
        marginTop: marginTop,
      }}
    />
  )
}
