import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 0, 0, 5, 52, 35, 346, 346, 457, 56, 45, 656,
  856, 75, 68, 6, 3, 38, 5, 78, 356, 8,
]

const width = Dimensions.get('window').width / 2 - 25

export default function SearchResults() {
  return (
    <>
      <Text style={styles.results}>{arr.length} Results</Text>
      <FlatList
        data={arr}
        keyExtractor={(_, index) => index.toString()}
        numColumns='2'
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }, index) => <Card item={item} key={index} />}
        style={{
          backgroundColor: '#000',
          paddingHorizontal: 17,
          paddingTop: 20,
        }}
      />
    </>
  )
}

const Card = ({ item }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.card}>
      <View style={styles.image} />
      <View>
        <Text style={styles.text}>Ottoman Lounge Chair</Text>
        <Text style={styles.text}>$3.500</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 320,
    width: width,
    marginHorizontal: 1,
    marginBottom: 10,
  },
  results: {
    color: '#fff',
    marginLeft: 25,
    marginTop: 40,
    marginBottom: 15,
  },
  image: {
    height: 250,
    backgroundColor: '#cecece',
    width: '100%',
  },
  text: {
    marginTop: 5,
    color: '#fff',
  },
})
