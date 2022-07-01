import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  FlatList,
} from 'react-native'
import React, { useRef, useState } from 'react'

import Title from '../../../components/Title'

import Purchases from '../../../components/profile/user/Purchases'
import ProfileTab from '../../../components/profile/user/ProfileTab'

import { TouchableOpacity } from 'react-native-gesture-handler'
import Stores from '../../../components/profile/user/Stores'
import Help from '../../../components/profile/login/Help'

const { width } = Dimensions.get('window')

export default function UserProfile({ navigation }) {
  // const [activeTab, setActiveTab] = useState('Purchases')

  const [activeIndex, setActiveIndex] = useState(0)

  const categories = ['Purchases', 'Profile', 'Settings']

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
    <>
      <View style={styles.recoveryContainer}>
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
                style={[
                  styles.headerTxt,
                  activeIndex === index && styles.active,
                ]}
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
          renderItem={({ item, index }) => {
            if (index === 0) return <Purchases />
            else if (index === 1) return <ProfileTab navigation={navigation} />
            else if (index === 2) return <Stores />
          }}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  recoveryContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  activeTabContainer: {
    marginHorizontal: 29,
  },
  headerBar: {
    marginTop: 200,
    flexGrow: 0,
    paddingVertical: 20,
    marginLeft: 8,
  },
  header: {
    marginHorizontal: 20,
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
