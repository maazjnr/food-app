import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Searched = ({searchText, setSearchText}) => {
  return (
    <View style={styles.container}>
      <TextInput 
      placeholder='Search Recipe'
      style={styles.input}
      value={searchText}
      onChangeText={(text) => setSearchText(text)}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    margin: 10
  },

  input: {
    backgroundColor: "#999",
    padding: 10,
    borderRadius: 10,
    color: "#111",
    borderWidth: 1,
  }
})




export default Searched