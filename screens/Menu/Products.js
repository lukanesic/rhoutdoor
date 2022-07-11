import { View } from 'react-native'
import React from 'react'

import BackIcon from './../../components/BackIcon'
import Title from './../../components/Title'

import CardList from '../../components/CardList'
import { useSelector, useDispatch } from 'react-redux'
import { resetProducts } from '../../store/productSlice'
import Loading from '../../components/Loading'

export default function Products({ navigation }) {
  const { products, loading } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const handleBackBtn = () => {
    navigation.navigate('SelectCategory')

    setTimeout(() => {
      dispatch(resetProducts())
    }, 500)
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <BackIcon onPress={handleBackBtn} />

      <Title color={'#a2a2a2'} />

      {loading && <Loading color={'black'} bg={'#fff'} marginTop={75} />}

      {!loading && (
        <CardList
          data={products}
          color={'#282828'}
          background={'#fff'}
          marginTop={220}
          onPress={() => navigation.navigate('Product')}
        />
      )}
    </View>
  )
}
