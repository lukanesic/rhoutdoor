import { Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

import CardList from '../CardList'
import Loading from '../Loading'

export default function SearchResults() {
  const { products, loading } = useSelector((state) => state.products)

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
        {products.length} Results
      </Text>

      {/* {loading && <Loading color={'white'} bg={'#000'} marginTop={-75} />} */}

      {!loading && (
        <CardList
          data={products}
          color={'#fff'}
          background={'#000'}
          marginTop={20}
        />
      )}
    </>
  )
}
