import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Help({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
        <Text style={styles.btnTxt}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.li}>
          Don't have an Account?{' '}
          <Text
            style={{
              fontWeight: 'bold',
              textDecorationLine: 'underline',
              textDecorationColor: '#fff',
            }}
          >
            REGISTER
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 45,
    marginTop: 70,
  },
  btn: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 20,
    width: 130,
  },
  btnTxt: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 12,
  },
  li: {
    color: '#fff',
    fontSize: 10,
    textTransform: 'uppercase',
  },
})
