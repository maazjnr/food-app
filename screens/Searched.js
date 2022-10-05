import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const Search = () => {

 const [input, setInput] = useState("")


  return (
    <View
    style={{
      display: "flex",
      justifyContent: "center",
      position: "relative",
    }}
  >
    <TextInput
      placeholder="Search by Customer"
      value={input}
      onChangeText={setInput}
      style={{
        backgroundColor: "#fff",
        padding: 15,
        margin: 5,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
      }}
    />

    <EvilIcons
      style={{
        position: "absolute",
        padding: 5,
        right: 25,
      }}
      name="search"
      size={24}
      color="black"
    />
  </View>
  )
}

export default Search