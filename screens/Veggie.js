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

const Veggie = () => {
  const navigation = useNavigation();
  const tw = useTailwind();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [veggie, setVeggie] = useState([]);
  let myApi = "dc08124ff78a4ea9855372247525457d";

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${myApi}&number=1`
    );
    const data = await api.json();
    setVeggie(data.recipes);
  };

  const [input, setInput] = useState("");

  return (
    <ScrollView>
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
            backgroundColor: "transparent",
            padding: 20,
            margin: 15,
            borderBottomWidth: 2,
            borderBottomColor: "#ff781f",
          }}
        />

        <EvilIcons
          style={{
            position: "absolute",
            padding: 5,
            right: 25,
            backgroundColor: "#ececec",
          }}
          name="search"
          size={24}
          color="black"
        />
      </View>

      <FlatList
        style={styles.FlatStyle}
        data={veggie}
        keyExtractor={(myItem) => myItem.id}
        // horizontal
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

      <Category />
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
    width: 350,
    height: 160,
    alignSelf: "stretch",
    borderRadius: 20,
    margin: 20,
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
