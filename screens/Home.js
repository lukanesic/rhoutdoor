import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
  Image,
  Animated,
  Pressable,
} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Title from '../components/Title'

const { width, height } = Dimensions.get('window')

const images = [
  require('./../assets/images/main-bg-sm2.webp'),
  require('./../assets/images/side1.webp'),
  require('./../assets/images/side2.webp'),
]

const homeData = [
  {
    image: require('./../assets/images/main-bg-sm2.webp'),
    title: 'Action Sale',
    subTitle: 'Online and in Stores',
  },
  {
    image: require('./../assets/images/side1.webp'),
    title: 'New',
    subTitle: '',
  },
  {
    image: require('./../assets/images/side2.jpg'),
    title: 'NewsLetter',
    subTitle: 'Join our newsletter',
  },
]

const Home = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current

  return (
    <View style={{ flex: 1 }}>
      <Title />
      <Animated.FlatList
        data={homeData}
        keyExtractor={(_, index) => index.toString()}
        snapToInterval={height}
        decelerationRate='fast'
        showsVerticalScrollIndicator={false}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => console.log({ item })}>
              <View style={styles.imgContainer}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.titleBox}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subTitle}>{item.subTitle}</Text>
                </View>
              </View>
            </Pressable>
          )
        }}
      />
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View key={index} style={styles.dot} />
        ))}
        <Animated.View
          style={[
            styles.indicator,
            {
              transform: [
                {
                  translateY: Animated.divide(scrollY, height).interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 16],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  imgContainer: {
    // height: height,
    // overflow: 'hidden',
  },

  image: {
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  pagination: {
    position: 'absolute',
    bottom: 100,
    right: 20,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  indicator: {
    height: 16,
    width: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#fff',
    position: 'absolute',
    top: -4,
    right: -4,
  },
  titleBox: {
    zIndex: 100,
    position: 'absolute',
    top: '50%',
    width: '100%',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 10,
    color: '#fff',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  subTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 20,
  },
})
