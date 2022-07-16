import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Searching from './Search/Searching'
import SearchProduct from './Search/SearchProduct'

const Stack = createStackNavigator()

const Search = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Searching' component={Searching} />
        <Stack.Screen name='SearchProduct' component={SearchProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Search
