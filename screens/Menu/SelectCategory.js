import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import React, { useState, useRef } from 'react'

import MenuCategory from '../../components/menu/MenuCategory'
import Title from '../../components/Title'

const { width } = Dimensions.get('window')

export default function SelectCategory({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const categories = ['Furniture', 'Lightning', 'Fire&Heat']

  const topRef = useRef()
  const bottomRef = useRef()

  const scrollToActiveIndex = (index) => {
    setActiveIndex(index)
    bottomRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    })
  }

  return (
    <View style={styles.container}>
      <Title color={'#000'} />

      <FlatList
        data={categories}
        keyExtractor={(_, index) => index.toString()}
        ref={topRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={styles.headerBar}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.header}
            onPress={() => scrollToActiveIndex(index)}
          >
            <Text
              style={[styles.headerTxt, activeIndex === index && styles.active]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      <FlatList
        data={categories}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={bottomRef}
        onMomentumScrollEnd={(ev) => {
          scrollToActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / width)
          )
        }}
        renderItem={({ item, index }) => (
          <MenuCategory index={index} navigation={navigation} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBar: {
    marginTop: 200,
    flexGrow: 0,
    paddingVertical: 20,
    marginLeft: 12,
  },
  header: {
    marginHorizontal: 15,
  },
  headerTxt: {
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: '300',
  },
  active: {
    fontWeight: '600',
  },
})
