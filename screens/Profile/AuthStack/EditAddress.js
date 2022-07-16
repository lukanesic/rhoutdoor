import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Change from '../../../components/profile/user/Change'
import BackIcon from '../../../components/BackIcon'
import { FloatingLabel } from '../../../components/FloatingLabel'
import ContinueBtn from '../../../components/ContinueBtn'
import ValidationMessage from '../../../components/ValidationMessage'

import { useSelector, useDispatch } from 'react-redux'
import { setUserFromStorage } from '../../../store/userSlice'

import { db } from '../../../firebase'
import { collection, doc, updateDoc } from '@firebase/firestore'

export default function EditAddress({
  navigation,
  navigationLocation,
  unsetSave,
  setContinue,
}) {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  console.log(user)

  const [inputs, setInputs] = useState({
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

  const onSubmit = async (navLoc) => {
    const address = inputs.address.value
    const city = inputs.city.value
    const country = inputs.country.value
    const postal = inputs.postal.value
    const phone = inputs.phone.value

    const addressIsValid = address.length > 0
    const cityIsValid = city.length > 0
    const countryIsValid = country.length > 0
    const postalIsValid = postal.length > 0
    const phoneIsValid = phone.length > 0

    if (
      !addressIsValid ||
      !cityIsValid ||
      !countryIsValid ||
      !postalIsValid ||
      !phoneIsValid
    ) {
      setInputs((current) => {
        return {
          address: { value: current.address.value, isValid: addressIsValid },
          city: { value: current.city.value, isValid: cityIsValid },
          country: { value: current.country.value, isValid: countryIsValid },
          postal: { value: current.postal.value, isValid: postalIsValid },
          phone: { value: current.phone.value, isValid: phoneIsValid },
        }
      })
      return
    }

    try {
      dispatch(
        setUserFromStorage({
          ...user,
          address: address,
          city: city,
          country: country,
          postal: postal,
          phone: phone,
        })
      )

      const userRef = doc(db, 'users', user.email)
      const userSnap = await updateDoc(userRef, {
        address: address,
        city: city,
        country: country,
        postal: postal,
        phone: phone,
      })

      navigation.navigate(`${navLoc}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <BackIcon
        onPress={() =>
          navigation.navigate(
            `${navigationLocation ? navigationLocation : 'ManageAddress'}`
          )
        }
      />
      {!unsetSave && (
        <ContinueBtn title={'Save'} onPress={() => onSubmit('ManageAddress')} />
      )}
      {setContinue && (
        <ContinueBtn title={'Continue'} onPress={() => onSubmit('Summary')} />
      )}

      <ScrollView style={styles.container}>
        <Change title={'edit address'} />
        <FloatingLabel
          label={user.name}
          textConfig={{
            selectTextOnFocus: false,
            editable: false,
          }}
          value={''}
          color={'#cecece'}
        />

        <FloatingLabel
          label={user.surname}
          textConfig={{
            selectTextOnFocus: false,
            editable: false,
          }}
          value={''}
          color={'#cecece'}
        />

        <FloatingLabel
          label={'Address'}
          textConfig={{
            onChangeText: inputHandler.bind(this, 'address'),
          }}
          value={inputs.address.value}
          color={'#cecece'}
        />
        {!inputs.address.isValid && (
          <ValidationMessage message={'Please enter your address'} />
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
