import { StyleSheet, Text, View, Animated, TextInput } from 'react-native'
import React, { useEffect, useRef } from 'react'

export const FloatingLabel = ({ label, textConfig, value, color }) => {
  const moveText = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (value !== '') {
      moveTextTop()
    } else if (value === '') {
      moveTextBottom()
    }
  }, [value])

  const handleFocus = () => {
    if (value !== '') {
      moveTextTop()
    }
  }

  const handleBlur = () => {
    if (value === '') {
      moveTextBottom()
    }
  }

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -20],
  })

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  }

  return (
    <View style={styles.inputContainer}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <Text style={styles.label}>{label}</Text>
      </Animated.View>
      <TextInput
        autoCapitalize={'none'}
        style={[
          styles.input,
          color
            ? { borderBottomColor: color, color: color }
            : { borderBottomColor: '#fff', color: '#fff' },
        ]}
        value={value}
        editable={true}
        onFocus={handleFocus}
        onBlur={handleBlur}
        blurOnSubmit
        {...textConfig}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {},
  input: {
    fontSize: 13,
    height: 35,
    borderBottomWidth: 1,
    marginTop: 20,
    // paddingVertical: 20,
  },
  label: {
    color: 'grey',
    fontSize: 14,
    marginTop: -5,
    zIndex: -10,
  },
  animatedStyle: {
    top: 30,
    left: 0,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 10000,
  },
})
