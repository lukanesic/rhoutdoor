import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native'
import React, { useEffect, useRef } from 'react'
import CloseIcon from '../../components/CloseIcon'

const images = ['0', '1', '2', '3']

const { width, height } = Dimensions.get('window')

const ITEM_WIDTH = width
const ITEM_HEIGHT = height * 0.75
const DOT_SIZE = 8
const INDICATOR = DOT_SIZE * 2

const product = {
  title: 'Chair',
  description: [
    ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, inventore.',
    ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, inventore.',
  ],
}

export default function ProductTest({ navigation }) {
  const scrollY = useRef(new Animated.Value(0))

  return (
    <View style={styles.container}>
      <CloseIcon onPress={() => navigation.navigate('Products')} />

      {/* <View style={{ height: height * 0.75, overflow: 'hidden' }}>
        <Animated.FlatList
          data={images}
          keyExtractor={(_, index) => index.toString()}
          snapToInterval={height * 0.75}
          decelerationRate={'fast'}
          showsVerticalScrollIndicator={false}
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          renderItem={({ item }, index) => (
            <View key={index}>
              <Image
                style={{
                  backgroundColor: '#cecece',
                  width: width,
                  height: height * 0.75,
                  borderBottomWidth: 1,
                  borderColor: '#000',
                  resizeMode: 'cover',
                }}
              />
            </View>
          )}
        />

        <View style={styles.pagination}>
          {images.map((_, index) => (
            <View style={styles.dot} key={index} />
          ))}
          <View style={styles.indicator} />
        </View>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  pagination: {
    position: 'absolute',
    top: (height * 0.75) / 2,
    left: 20,
  },
  dot: {
    width: 8,
    borderRadius: 8,
    height: 8,
    backgroundColor: '#000',
    marginBottom: 8,
  },
  indicator: {
    width: 8,
    borderRadius: 8,
    height: 8,
    borderWidth: 1,
    borderColor: '#fff',
    position: 'absolute',
    top: -8 / 2,
    left: -8 / 2,
  },
})
