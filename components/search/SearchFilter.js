import { StyleSheet, Text, View, Keyboard } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { useDispatch } from 'react-redux'
import { addRecent } from '../../store/recentSlice'
import { fetchProductsByCategory } from '../../store/productSlice'

const furnitureSub = ['Dining', 'Benches', 'Chairs', 'Swivel']

const lightingSub = ['Pendants', 'Sconces', 'Flushmounts']

const fire = ['Tables', 'Heatsail', 'Covers']

const subCats = [
  'Dining',
  'Benches',
  'Chairs',
  'Swivel',
  'Pendants',
  'Sconces',
  'Flushmounts',
  'Tables',
  'Heatsail®',
  'Covers',
]

export default function SearchFilter({
  search,
  setSearch,
  setFiltered,
  activeCategory,
  setActiveCategory,
}) {
  const dispatch = useDispatch()

  const searchHandler = async (subcategory) => {
    setSearch(subcategory)
    dispatch(addRecent(subcategory))
    setFiltered(subcategory)

    dispatch(fetchProductsByCategory(subcategory.toLowerCase()))
    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>
      {subCats
        .filter((item) => item.includes(search))
        .map((subcategory, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => searchHandler(subcategory)}
          >
            <Text style={styles.text}>{subcategory}</Text>
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
