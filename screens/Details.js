import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import Popular from "./Popular";

const Details = () => {
  const [veggie, setVeggie] = useState([]);
  let myApi = "dc08124ff78a4ea9855372247525457d";

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${myApi}&number=3`
    );
    const data = await api.json();
    setVeggie(data.recipes);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeToText}>Welcome to FoodLandRest</Text>
        <TextInput keyboardType="text" style={styles.inputStyle} placeholder="Search Food"/>
      </View>
    
      <FlatList
        style={styles.FlatStyle}
        data={veggie}
        keyExtractor={({ id }, index) => id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={{ justifyContent: "center" }}>
              <Image
                resizeMode="cover"
                style={styles.recipeImg}
                source={{ uri: `${item.image}` }}
              />
            </View>
          );
        }}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems:"center",
    textAlign: "center",
  },

  recipeCard: {
    width: "100%",
    height: 500,
  },

  recipeImg: {
    width: 350,
    height: 400,
    borderRadius: 50,
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
    marginTop: 10
  },

  FlatStyle: {
    width: "100%",
    height: "100%",
  },

  textContainer: {
    width: "100%",
    padding: 20,
    textAlign: "center"
  },

  welcomeToText: {
    fontSize: 20,
    color: "#ff781f",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default Details;
