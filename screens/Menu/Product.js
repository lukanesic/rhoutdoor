import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import CloseIcon from '../../components/CloseIcon'

import { useDispatch } from 'react-redux'
import { addToCart } from './../../store/cartSlice'

const { width, height } = Dimensions.get('window')

export default function Product({ navigation, route }) {
  const { category, description, title, images, price } = route.params

  const dispatch = useDispatch()
  const handleCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <View style={styles.container}>
      <CloseIcon onPress={() => navigation.navigate('Products')} />
      <View style={styles.productContainer}>
        <View>
          <Image style={styles.image} source={{ uri: images[1] }} />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.description}
        >
          <Text style={styles.title}>{title}</Text>
          <View style={styles.pricebtnContainer}>
            <Text style={styles.price}>${price}</Text>

            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.7}
              onPress={() => handleCart(route.params)}
            >
              <Text style={styles.btnTxt}>Add to bag</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 100,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: height * 0.6,
  },
  title: {
    textTransform: 'uppercase',
    marginVertical: 20,
    fontSize: 18,
    fontWeight: '500',
  },
  pricebtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 15,
    marginBottom: 10,
  },
  btn: {
    textTransform: 'uppercase',
    borderWidth: 1,
    borderColor: '#000',
    width: 130,
    padding: 10,
    backgroundColor: '#000',
  },
  btnTxt: {
    textAlign: 'center',
    color: '#fff',
  },
})
