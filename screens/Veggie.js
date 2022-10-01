import {
  View,
  Text,
  ScrollView,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import React, { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useTailwind } from "tailwind-rn";
import { EvilIcons } from "@expo/vector-icons";
import Category from "../components/Category";
import Popular from "../components/Popular";

const Veggie = () => {
  const navigation = useNavigation();
  const tw = useTailwind();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  let myApi = "dc08124ff78a4ea9855372247525457d";

  const [veggie, setVeggie] = useState([]);
  const [category, setCategory] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    getVeggie();
  }, []);

  useEffect(() => {
    getPopular();
  }, []);

  const getVeggie = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${myApi}&number=1`
    );
    const data = await api.json();
    setVeggie(data.recipes);
  };

  const getCategory = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${myApi}&number=3`
    );
    const data = await api.json();
    setCategory(data.recipes);
  };

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${myApi}&number=3`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };

  const [input, setInput] = useState("");

  return (
    <ScrollView style={{ backgroundColor: "#000" }}>
      {/* search box */}
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
            backgroundColor: "#f5c77e",
            padding: 15,
            margin: 10,
            borderBottomWidth: 2,
            borderRadius: 10,
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

      {/* search box */}

      {/* rendering down items from api */}
      <FlatList
        style={styles.FlatStyle}
        data={veggie}
        keyExtractor={(myItem) => myItem.id}
        // horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              <Image
                resizeMode="cover"
                style={styles.recipeImg}
                source={{ uri: `${item.image}` }}
              />
            </View>
          );
        }}
      />
      <Text
        style={{
          marginLeft: 12,
          fontWeight: "bold",
          fontSize: 19,
          color: "#f5c77e",
        }}
      >
        Categories
      </Text>
      <FlatList
        style={styles.FlatStyle}
        data={category}
        keyExtractor={(myItem) => myItem.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Category image={item.image} />;
        }}
      />

      <Text
        style={{
          marginLeft: 12,
          fontWeight: "bold",
          fontSize: 19,
          color: "#f5c77e",
        }}
      >
        Popular
      </Text>

      <FlatList
        style={styles.FlatStyle}
        data={popular}
        keyExtractor={(myItem) => myItem.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Popular image={item.image} />;
        }}
      />

      {/* rendering down items from api */}
    </ScrollView>
  );
};

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
    width: "100%",
    height: 160,
    borderRadius: 10,
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

export default Veggie;
