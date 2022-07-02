import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Change({ title, bold, description }) {
  return (
    <>
      <Text style={styles.manageTitle}>{title}</Text>
      {description && (
        <Text style={styles.changeEmailTxt}>
          {description}{' '}
          {bold && (
            <Text style={{ fontWeight: '500', color: '#282828' }}>{bold}</Text>
          )}
        </Text>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  manageTitle: {
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  manageBtn: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginVertical: 40,
    backgroundColor: '#000',
  },
  manageBtnTxt: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 12,
  },
  changeEmailTxt: {
    fontSize: 10,
    color: '#a2a2a2',
    marginTop: 20,
    textTransform: 'uppercase',
  },
})
