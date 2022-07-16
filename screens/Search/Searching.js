import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'

import Title from '../../components/Title'
import SearchBar from '../../components/search/SearchBar'
import SearchFilter from '../../components/search/SearchFilter'
import Trends from '../../components/search/Trends'
import RecentlyViewed from '../../components/search/RecentlyViewed'
import SearchResults from '../../components/search/SearchResults'

const Searching = ({ navigation }) => {
  const [useSearch, setUseSearch] = useState('')
  const [filtered, setFiltered] = useState('')

  const [activeCategory, setActiveCategory] = useState('Furniture')

  return (
    <View style={styles.container}>
      <Title />
      <SearchBar
        search={useSearch}
        setSearch={setUseSearch}
        setFiltered={setFiltered}
      />

      {filtered !== '' && <SearchResults navigation={navigation} />}

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

export default Searching

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 200,
  },
})
