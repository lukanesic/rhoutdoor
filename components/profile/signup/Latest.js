import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'

export default function Latest() {
  const [isEnable, setIsEnable] = useState(false)

  const toggleSwitch = () => {
    setIsEnable((prevState) => !prevState)
  }

  return (
    <View style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.txt}>
          I would like to recieve the latest news from RH by email
        </Text>
      </View>

      <Switch
        trackColor={{ false: 'gray', true: 'green' }}
        thumbColor={isEnable && 'white'}
        onValueChange={toggleSwitch}
        value={isEnable}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 45,
    marginRight: 45,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 10,
  },
  txtContainer: {
    width: 200,
  },
  txt: {
    textTransform: 'uppercase',
    fontSize: 12,
    color: '#282828',
  },
  switchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },
})
