import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import Title from '../../../components/Title'

import Purchases from '../../../components/profile/user/Purchases'
import ProfileTab from '../../../components/profile/user/ProfileTab'
import Categories from '../../../components/profile/user/Categories'

export default function UserProfile({ navigation }) {
  const [activeTab, setActiveTab] = useState('Purchases')

  return (
    <View style={styles.recoveryContainer}>
      <Title color={'#000'} />
      <Categories active={activeTab} setActive={setActiveTab} />
      <View style={styles.activeTabContainer}>
        {activeTab === 'Purchases' && <Purchases />}
        {activeTab === 'Profile' && <ProfileTab navigation={navigation} />}
      </View>
    </View>
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
})
