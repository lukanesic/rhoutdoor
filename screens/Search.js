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

  const [activeCategory, setActiveCategory] = useState('Furniture')

  return (
    <View style={styles.container}>
      <Title />
      <Categories active={activeCategory} setActive={setActiveCategory} />
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
          <RecentlyViewed setSearch={setUseSearch} setFiltered={setFiltered} />
          {useSearch !== '' && (
            <SearchFilter
              search={useSearch}
              setSearch={setUseSearch}
              setFiltered={setFiltered}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
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
