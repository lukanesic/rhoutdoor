import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { removeAllRecent } from '../../store/recentSlice'
import { fetchProductsByCategory } from '../../store/productSlice'

// Dolazi iz Redux-a koji cuva podatke koji dolaze iz inputa, tj ono sto smo pretrazili. Ovo dolazi naknadno.
// Sastoji se iz istorije pretrazivanja, i dugmeta koji clear to.
export default function RecentlyViewed({ setSearch, setFiltered }) {
  const { recent } = useSelector((state) => state.recentViewed)
  const dispatch = useDispatch()

  const searchHandler = (subcategory) => {
    setSearch(subcategory)
    setFiltered(subcategory)
    dispatch(fetchProductsByCategory(subcategory.toLowerCase()))
  }

  return (
    <>
      {Object.keys(recent).length !== 0 && (
        <View style={styles.container}>
          <Text style={styles.title}>RecentlyViewed</Text>
          <View>
            {recent.map((subcategory, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => searchHandler(subcategory)}
              >
                <Text style={styles.text}>{subcategory}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity onPress={() => dispatch(removeAllRecent())}>
            <Text style={styles.title}>Clear Recent Searches</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 25,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 10,
    fontWeight: '300',
  },
})
