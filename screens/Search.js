import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import Categories from '../components/search/Categories'
import SearchBar from '../components/search/SearchBar'
import Trends from '../components/search/Trends'
import Title from '../components/Title'
import RecentlyViewed from '../components/search/RecentlyViewed'
import { ScrollView } from 'react-native-gesture-handler'

const Search = () => {
  const [useSearch, setUseSearch] = useState('')

  return (
    <View style={styles.container}>
      <Title />
      <Categories />
      <SearchBar search={useSearch} setSearch={setUseSearch} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Trends search={useSearch} setSearch={setUseSearch} />
        <RecentlyViewed />
      </ScrollView>
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
