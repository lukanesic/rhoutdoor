import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'

import { useDispatch } from 'react-redux'
import { addRecent } from '../../store/recentSlice'

const suggestions = ['Lighting', 'Umbrela', 'Fire&Heat']

export default function Trends({ search, setSearch, filtered, setFiltered }) {
  const dispatch = useDispatch()

  const searchHandler = (item) => {
    setSearch(item)
    setFiltered(item)
    dispatch(addRecent(item))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trends</Text>
      <View style={styles.links}>
        {suggestions.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => searchHandler(item)}>
            <Text style={styles.link}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginVertical: 10,
  },
  linksContainer: {},
  link: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 10,
    fontWeight: '300',
  },
})
