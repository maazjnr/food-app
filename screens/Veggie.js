import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import React, { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Category from "../components/Category";
import Popular from "../components/Popular";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserHeader from "../components/UserHeader";
import PopularPicks from "../components/PopularPicks";

const Veggie = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  let myApi = "dc08124ff78a4ea9855372247525457d";

  const [veggie, setVeggie] = useState([]);
  const [category, setCategory] = useState([]);
  const [popular, setPopular] = useState([]);
  const [popularPicks, setPopularPicks] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    getVeggie();
  }, []);

  useEffect(() => {
    getPopular();
  }, []);

  useEffect(() => {
    getPopularPicks();
  }, []);

  // fetching veggie api request

  const getVeggie = async () => {
    try {
      const check = await AsyncStorage.getItem("veggie");
      if (check) {
        setVeggie(JSON.parse(check));
      } else {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${myApi}&number=15`
        );
        const data = await api.json();

        await AsyncStorage.setItem("veggie", JSON.stringify(data.recipes));
        setVeggie(data.recipes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // fetching category api request

  const getCategory = async () => {
    try {
      const check = await AsyncStorage.getItem("category");
      if (check) {
        setCategory(JSON.parse(check));
      } else {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${myApi}&number=15`
        );
        const data = await api.json();

        await AsyncStorage.setItem("category", JSON.stringify(data.recipes));
        setCategory(data.recipes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // fetching popular api request
  const getPopular = async () => {
    try {
      const check = await AsyncStorage.getItem("popular");
      if (check) {
        setPopular(JSON.parse(check));
      } else {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${myApi}&number=9`
        );
        const data = await api.json();
        await AsyncStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopular(data.recipes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // fetching wine api request
  const getPopularPicks = async () => {
    try {
      const check = await AsyncStorage.getItem("ppicks");
      if (check) {
        setPopularPicks(JSON.parse(check));
      } else {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${myApi}&number=15`
        );
        const data = await api.json();
        await AsyncStorage.setItem("ppicks", JSON.stringify(data.recipes));
        popularPicks(data.recipes);
      }
    } catch (error) {
      console.log(error);
    }
  };


  const [input, setInput] = useState('');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Rendering the user header components */}
      <UserHeader />
      {/* Rendering the user header components */}

      <ScrollView
        style={{
          backgroundColor: "#fff",
          padding: 10,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* rendering down items from api */}
        <FlatList
          data={veggie}
          keyExtractor={(myItem) => myItem.id}
          horizontal
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
                  marginBottom: 20,
                }}
              >
                <Image
                  resizeMode="cover"
                  style={styles.recipeImg}
                  source={{ uri: `${item.image}` }}
                />
                <Text style={{ color: "#fff" }}>{item.tile}</Text>
              </View>
            );
          }}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 19,
            color: "#111",
            padding: 10,
          }}
        >
          Vegetarian
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

        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: "#111",
            }}
          >
            Popular
          </Text>

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: "#ff781f",
              padding: 10,
            }}
          >
            See All
          </Text>
        </View>

        <FlatList
          style={styles.FlatStyle}
          data={popular}
          keyExtractor={(myItem) => myItem.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <Popular image={item.image} title={item.title} />;
          }}
        />

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 19,
            color: "#111",
            padding: 10,
            marginTop: 20
          }}
        >
          Popular Picks
        </Text>

        <FlatList
          style={styles.FlatStyle}
          data={popularPicks}
          keyExtractor={(myItem) => myItem.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <PopularPicks image={item.image} title={item.title} />;
          }}
        />

        {/* rendering down items from api */}
      </ScrollView>
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
    width: 280,
    height: 230,
    borderRadius: 10,
    marginLeft: -5,
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
