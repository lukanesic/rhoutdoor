import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

import SelectCategory from './Menu/SelectCategory'
import Products from './Menu/Products'
import ProductTest from './Menu/ProductTest'
import Product from './Menu/Product'

const Menu = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='SelectCategory' component={SelectCategory} />
        <Stack.Screen name='Products' component={Products} />
        <Stack.Screen name='Product' component={Product} />
        <Stack.Screen name='ProductTest' component={ProductTest} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Menu
