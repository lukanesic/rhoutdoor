import { StyleSheet, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'

import MenuList from './MenuList'
import { fetchProductsByCategory } from '../../store/productSlice'

const { width } = Dimensions.get('window')

export default function MenuCategory({ index, navigation }) {
  const furnitureCategories = ['Dining', 'Benches', 'Chairs', 'Swivel']

  const lightingCategories = ['Pendants', 'Sconces', 'Flushmounts']

  const fireCategories = ['Tables', 'Heatsail®', 'Covers']

  const dispatch = useDispatch()

  const handleFetch = (subcategory) => {
    dispatch(fetchProductsByCategory(subcategory.toLowerCase()))
    navigation.navigate('Products')
  }

  return (
    <ScrollView style={styles.categoriesContainer}>
      {index === 0 &&
        furnitureCategories.map((item, index) => (
          <MenuList
            key={index}
            item={item}
            index={index}
            onPress={() => handleFetch(item)}
          />
        ))}
      {index === 1 &&
        lightingCategories.map((item, index) => (
          <MenuList
            key={index}
            item={item}
            index={index}
            onPress={() => handleFetch(item)}
          />
        ))}
      {index === 2 &&
        fireCategories.map((item, index) => (
          <MenuList
            key={index}
            item={item}
            index={index}
            onPress={() => handleFetch(item)}
          />
        ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  categoriesContainer: {
    width: width,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
})
