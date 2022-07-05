import { StyleSheet, Dimensions, ScrollView } from 'react-native'
import React from 'react'

import MenuList from './MenuList'

const { width } = Dimensions.get('window')

export default function MenuCategory({ index, navigation }) {
  const furnitureCategories = [
    'Dining Tables',
    'Benches',
    'Chairs',
    'Swivel Chairs',
  ]

  const lightingCategories = ['Pendants', 'Sconces', 'Flushmounts']

  const fireCategories = ['Fire Tables', 'Heatsail®', 'Covers']

  return (
    <ScrollView style={styles.categoriesContainer}>
      {index === 0 &&
        furnitureCategories.map((item, index) => (
          <MenuList
            key={index}
            item={item}
            index={index}
            onPress={() => navigation.navigate('Products')}
          />
        ))}
      {index === 1 &&
        lightingCategories.map((item, index) => (
          <MenuList key={index} item={item} index={index} />
        ))}
      {index === 2 &&
        fireCategories.map((item, index) => (
          <MenuList key={index} item={item} index={index} />
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
