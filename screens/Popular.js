import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    SafeAreaView,
    StatusBar
  } from "react-native";
  import React from "react";
  import { useState, useEffect } from "react";
  
  const Popular = () => {
    const [popular, setPopular] = useState([]);
    let myApi = "dc08124ff78a4ea9855372247525457d";
  
    useEffect(() => {
      getPopular();
    }, []);
  
    const getPopular = async () => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${myApi}&number=3`
      );
      const data = await api.json();
      setPopular(data.recipes);
    };
  
    return (
      <SafeAreaView>
        <Text style={{
          padding: 20, fontSize: 20,
          fontWeight: "bold"
          }}>
          Popular Picks
          </Text>

        <FlatList
          style={styles.FlatStyle}
          data={popular}
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
      width: 200,
      height: 200,
      borderRadius: 20,
      marginLeft: 10
    },
  
    titleText: {
      fontSize: 25,
      fontWeight: "bold",
      position: "absolute",
      bottom: 200,
      left: 20,
      color: "#fff",
      textShadowColor: "gray",
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
    },
  
    inputStyle: {
      width: 300,
      height: 50,
      backgroundColor: "#f8f8f8",
      textIndent: 20,
      borderRadius: 20,
      marginBottom: 20,
    },
  
    FlatStyle: {
      width: "100%",
      height: "100%",
      padding: 20
    },

  });
  
  export default Popular;
  