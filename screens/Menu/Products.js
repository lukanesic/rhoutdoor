import { View } from 'react-native'
import React from 'react'

import BackIcon from './../../components/BackIcon'
import Title from './../../components/Title'

import CardList from '../../components/CardList'

export default function Products({ navigation }) {
  const arr = [
    0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 0, 0, 5, 52, 35, 346, 346, 457, 56, 45,
    656, 856, 75, 68, 6, 3, 38, 5, 78, 356, 8,
  ]

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <BackIcon onPress={() => navigation.navigate('SelectCategory')} />

      <Title color={'#a2a2a2'} />

      <CardList
        data={arr}
        color={'#282828'}
        background={'#fff'}
        marginTop={220}
        onPress={() => navigation.navigate('Product')}
      />
    </View>
  )
}
