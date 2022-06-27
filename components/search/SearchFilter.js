import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { useDispatch } from 'react-redux'
import { addRecent } from '../../store/recentSlice'

const dummy = [
  'Garniture',
  'Siting',
  'Dining',
  'Tables',
  'Shade Structures',
  'Chaises',
  'Shop by Room',
  'Collections',
]

export default function SearchFilter({ search, setSearch, setFiltered }) {
  const dispatch = useDispatch()

  const searchHandler = (item) => {
    setSearch(item)
    dispatch(addRecent(item))
    setFiltered(item)
  }

  return (
    <View style={styles.container}>
      {dummy
        .filter((item) => item.includes(search))
        .map((res, index) => (
          <TouchableOpacity key={index} onPress={() => searchHandler(res)}>
            <Text style={styles.text}>{res}</Text>
          </TouchableOpacity>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginLeft: 25,
    marginTop: 25,
    height: '100%',
    width: '85%',
    zIndex: 100,
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 10,
    fontWeight: '300',
  },
})
