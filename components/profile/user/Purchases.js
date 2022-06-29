import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { FontAwesome } from '@expo/vector-icons'

const tabs = ['Online', 'Returns']

export default function Purchases() {
  const [active, setActive] = useState('Online')

  return (
    <View>
      <View style={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity key={index} onPress={() => setActive(tab)}>
            <Text style={[styles.tabTxt, active === tab && styles.active]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        {active === 'Online' && <Online />}
        {active === 'Returns' && <Returns />}
      </View>
    </View>
  )
}

const Online = () => {
  return (
    <View style={styles.onlineContainer}>
      <FontAwesome name='list-alt' size={24} color='grey' />
      <Text style={styles.onlineTxt}>You have not placed any orders yet</Text>
    </View>
  )
}

const Returns = () => {
  return (
    <View style={styles.onlineContainer}>
      <FontAwesome name='list-alt' size={24} color='grey' />
      <Text style={styles.onlineTxt}>
        There are not active returns at this time
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tabsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabTxt: {
    marginRight: 30,
    fontSize: 12,
    textTransform: 'uppercase',
    paddingVertical: 10,
  },
  active: {
    fontWeight: '600',
  },
  onlineContainer: {
    marginVertical: 20,
  },
  onlineTxt: {
    textTransform: 'uppercase',
    marginTop: 20,
    color: '#282828',
    fontSize: 10,
  },
})
