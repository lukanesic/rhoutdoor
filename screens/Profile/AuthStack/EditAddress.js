import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Change from '../../../components/profile/user/Change'
import BackIcon from '../../../components/BackIcon'
import { FloatingLabel } from '../../../components/FloatingLabel'
import ContinueBtn from '../../../components/ContinueBtn'
import ValidationMessage from '../../../components/ValidationMessage'

export default function EditAddress({ navigation, navigationLocation }) {
  const [inputs, setInputs] = useState({
    name: { value: '', isValid: true },
    surname: { value: '', isValid: true },
    address: { value: '', isValid: true },
    city: { value: '', isValid: true },
    country: { value: '', isValid: true },
    postal: { value: '', isValid: true },
    phone: { value: '', isValid: true },
  })

  const inputHandler = (idenfitier, val) => {
    setInputs((current) => {
      return {
        ...current,
        [idenfitier]: { value: val, isValid: true },
      }
    })
  }

  const onSubmit = () => {
    const name = inputs.name.value
    const surname = inputs.surname.value
    const address = inputs.address.value
    const city = inputs.city.value
    const country = inputs.country.value
    const postal = inputs.postal.value
    const phone = inputs.phone.value

    const nameIsValid = name.length > 0
    const surnameIsValid = surname.length > 0
    const addressIsValid = address.length > 0
    const cityIsValid = city.length > 0
    const countryIsValid = country.length > 0
    const postalIsValid = postal.length > 0
    const phoneIsValid = phone.length > 0

    if (
      !nameIsValid ||
      !surnameIsValid ||
      !addressIsValid ||
      !cityIsValid ||
      !countryIsValid ||
      !postalIsValid ||
      !phoneIsValid
    ) {
      setInputs((current) => {
        return {
          name: { value: current.name.value, isValid: nameIsValid },
          surname: { value: current.surname.value, isValid: surnameIsValid },
          address: { value: current.address.value, isValid: addressIsValid },
          city: { value: current.city.value, isValid: cityIsValid },
          country: { value: current.country.value, isValid: countryIsValid },
          postal: { value: current.postal.value, isValid: postalIsValid },
          phone: { value: current.phone.value, isValid: phoneIsValid },
        }
      })
      return
    }

    console.log('Save address Func')

    // DISPATCH
    // DB
  }

  return (
    <>
      {/* <BackIcon onPress={() => navigation.navigate('ManageAddress')} /> */}
      <BackIcon onPress={() => navigation.navigate(`${navigationLocation}`)} />
      <ContinueBtn title={'Save'} onPress={onSubmit} />
      <ScrollView style={styles.container}>
        <Change title={'edit address'} />
        <FloatingLabel
          label={'Name'}
          textConfig={{
            onChangeText: inputHandler.bind(this, 'name'),
          }}
          value={inputs.name.value}
          color={'#cecece'}
        />
        {!inputs.name.isValid && (
          <ValidationMessage message={'Please enter your name'} />
        )}

        <FloatingLabel
          label={'Surname'}
          textConfig={{
            onChangeText: inputHandler.bind(this, 'surname'),
          }}
          value={inputs.surname.value}
          color={'#cecece'}
        />
        {!inputs.surname.isValid && (
          <ValidationMessage message={'Please enter your surname'} />
        )}

        <FloatingLabel
          label={'Address'}
          textConfig={{
            onChangeText: inputHandler.bind(this, 'address'),
          }}
          value={inputs.address.value}
          color={'#cecece'}
        />
        {!inputs.address.isValid && (
          <ValidationMessage message={'Please enter your surname'} />
        )}

        <FloatingLabel
          label={'City'}
          textConfig={{
            onChangeText: inputHandler.bind(this, 'city'),
          }}
          value={inputs.city.value}
          color={'#cecece'}
        />
        {!inputs.city.isValid && (
          <ValidationMessage message={'Please enter your city'} />
        )}

        <FloatingLabel
          label={'Country'}
          textConfig={{
            onChangeText: inputHandler.bind(this, 'country'),
          }}
          value={inputs.country.value}
          color={'#cecece'}
        />
        {!inputs.country.isValid && (
          <ValidationMessage message={'Please enter your country'} />
        )}

        <FloatingLabel
          label={'Post Code'}
          textConfig={{
            onChangeText: inputHandler.bind(this, 'postal'),
          }}
          value={inputs.postal.value}
          color={'#cecece'}
        />
        {!inputs.postal.isValid && (
          <ValidationMessage message={'Please enter your postal code'} />
        )}

        <FloatingLabel
          label={'Phone'}
          textConfig={{
            onChangeText: inputHandler.bind(this, 'phone'),
          }}
          value={inputs.phone.value}
          color={'#cecece'}
        />
        {!inputs.phone.isValid && (
          <ValidationMessage message={'Please enter your phone number'} />
        )}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100,
    paddingHorizontal: 25,
  },
})
