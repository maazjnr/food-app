import {
  View,
  Text,
  ScrollView,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import React, {  useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

const Category = () => {

  const [category, setCategory] = useState([]);
  let myApi = "dc08124ff78a4ea9855372247525457d";

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${myApi}&number=3`
    );
    const data = await api.json();
    setCategory(data.recipes);
  }
  return (
    <View style={{margin: 10}}>
        <FlatList
        style={styles.FlatStyle}
        data={category}
        keyExtractor={(myItem) => myItem.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={{ justifyContent: "center" }}>
              <Image
                resizeMode="cover"
                style={styles.recipeImg}
                source={{ uri: `${item.image}` }}
              />
            </TouchableOpacity >
          );
        }}
      />

      <Text style={
        {margin: 10, fontWeight: "bold",
        fontSize: 19}}>Category</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  recipeCard: {
    width: "100%",
    height: 500,
  },

  recipeImg: {
    width: 150,
    height: 160,
    alignSelf: "stretch",
    borderRadius: 20,
    margin: 5,
  },

  titleText: {
    fontSize: 25,
    position: "absolute",
    bottom: 200,
    left: 20,
    color: "#fff",
    textShadowColor: "gray",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  inputStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "#f8f8f8",
    textIndent: 20,
    borderRadius: 20,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },

  FlatStyle: {
    width: "100%",
    height: "100%",
  },

  textContainer: {
    width: "100%",
    padding: 20,
    textAlign: "center",
  },

  welcomeToText: {
    fontSize: 20,
    color: "#ff701f",
    fontWeight: "bold",
    textAlign: "center",
  },
});


export default Category