import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState, useLayoutEffect } from "react";
import Searched from "../screens/Searched";
import { useNavigation } from "@react-navigation/native";

const Search = () => {

const myApi = "dc08124ff78a4ea9855372247525457d";

const navigation = useNavigation();
const [input, setInput] = useState("");

useLayoutEffect(() => {
  navigation.setOptions({
    headerShown: false,
  });
}, []);

const [myData, setMyData] = useState([])
const searchDataReq = () => {
fetch(
  `https://api.spoonacular.com/recipes/complexSearch?apiKey=${myApi}&number=25`
)
  .then((response) => response.json())
  .then((responseJson) => {
    setMyData(responseJson.results);
   
  })
  .catch((error) => {
    console.error(error);
  });

}

useEffect(() => {
searchDataReq()
}, []);



  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Recipe"
        style={styles.input}
        value={input}
        onChangeText={(text) => setInput(text)}
      />

      <Searched data={myData} input={input} 
      setInput={setInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    color: "#111",
    borderWidth: 1,
    margin: 7,
    width: 320,
    height: 50
  },
});

export default Search;
