import { StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'

const categories = ['Purchases', 'Profile', 'Stores', 'Help', 'Settings']

export default function Categories({ active, setActive }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.headerBar}
    >
      {categories.map((header, index) => (
        <TouchableOpacity
          key={index}
          style={styles.header}
          onPress={() => setActive(header)}
        >
          <Text style={[styles.headerTxt, active === header && styles.active]}>
            {header}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  headerBar: {
    marginTop: 200,
    flexGrow: 0,
    paddingVertical: 20,
    marginLeft: 8,
  },
  header: {
    marginHorizontal: 20,
  },
  headerTxt: {
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: '300',
  },
  active: {
    fontWeight: '600',
  },
})
