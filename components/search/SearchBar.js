import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'

import { AntDesign } from '@expo/vector-icons'
import { resetProducts } from '../../store/productSlice'

export default function SearchBar({ search, setSearch, setFiltered }) {
  const dispatch = useDispatch()

  const handleReset = () => {
    setSearch('')
    setFiltered('')
    dispatch(resetProducts())
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='ENTER SEARCH TERMS'
        placeholderTextColor='#fff'
        onChangeText={(value) => setSearch(value)}
        value={search}
        onKeyPress={({ nativeEvent }) => {
          nativeEvent.key === 'Backspace' ? setFiltered('') : ''
        }}
      />
      {search !== '' && (
        <TouchableOpacity onPress={handleReset} style={styles.icon}>
          <AntDesign name='closecircle' size={16} color='grey' />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  input: {
    width: '85%',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginHorizontal: 25,
    fontWeight: '400',
    color: '#fff',
  },
  icon: {
    position: 'absolute',
    right: 35,
    top: 10,
  },
})
