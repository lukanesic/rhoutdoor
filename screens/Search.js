import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'

import Categories from '../components/search/Categories'
import SearchBar from '../components/search/SearchBar'
import Trends from '../components/search/Trends'
import Title from '../components/Title'
import RecentlyViewed from '../components/search/RecentlyViewed'

import SearchFilter from '../components/search/SearchFilter'
import SearchResults from '../components/search/SearchResults'

const Search = () => {
  const [useSearch, setUseSearch] = useState('')
  const [filtered, setFiltered] = useState('')

  return (
    <View style={styles.container}>
      <Title />
      <Categories />
      <SearchBar
        search={useSearch}
        setSearch={setUseSearch}
        setFiltered={setFiltered}
      />

      {filtered !== '' && <SearchResults />}
      {filtered === '' && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Trends
            search={useSearch}
            setSearch={setUseSearch}
            setFiltered={setFiltered}
            filtered={filtered}
          />
          <RecentlyViewed />
          {useSearch !== '' && (
            <SearchFilter
              search={useSearch}
              setSearch={setUseSearch}
              setFiltered={setFiltered}
            />
          )}
        </ScrollView>
      )}
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
