import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/Title'
import Categories from '../components/search/Categories'
import SearchBar from '../components/search/SearchBar'
import Trends from '../components/search/Trends'

const Search = () => {
  const [useSearch, setUseSearch] = useState('')

  return (
    <View style={styles.container}>
      {/* <Title /> */}
      <Categories />
      <SearchBar />
      {/* <Trends search={useSearch} setSearch={setUseSearch} /> */}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
})
