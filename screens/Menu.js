import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/Title'
import Categories from '../components/menu/Categories'
import CategoryItems from '../components/menu/CategoryItems'

const Menu = () => {
  const [active, setActive] = useState('Furniture')

  return (
    <View style={styles.container}>
      <Title />
      <Categories active={active} setActive={setActive} />
      <CategoryItems active={active} setActive={setActive} />
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a2a2a2',
  },
})
