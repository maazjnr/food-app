import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

const Category = ({ image, name }) => {
  return (
    <View>
      <TouchableOpacity style={{ justifyContent: "center", margin: 5 }}>
        <Image
          resizeMode="cover"
          style={styles.recipeImg}
          source={{ uri: `${image}` }}
        />
      </TouchableOpacity>
    </View>
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
    width: 100,
    height: 110,
    borderRadius: 10,
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

export default Category;
