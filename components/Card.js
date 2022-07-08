import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native'
import React from 'react'

import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'

const width = Dimensions.get('window').width / 2 - 25

export default function Card({ item, color, onPress }) {
  // Ovde je cart funkcionalnost koja ce da bude umesto onPress koji dolazi
  // onPress je dinamicno i zavisi odakle ga zovemo
  // ovde cu da ucinim onPress da uvek zove addtocart dok ne sredim Product page]
  const dispatch = useDispatch()

  console.log(item)

  const handleCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.card}
      onPress={() => handleCart(item)}
    >
      <Image style={styles.image} source={{ uri: item.images[1] }} />
      <View>
        <Text style={[styles.text, color && { color: color }]}>
          {item.title}
        </Text>
        <Text style={[styles.text, color && { color: color }]}>
          ${item.price}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 320,
    width: width,
    marginHorizontal: 1,
    marginBottom: 50,
  },

  image: {
    height: 250,
    width: '100%',
  },
  text: {
    marginTop: 5,
  },
})
