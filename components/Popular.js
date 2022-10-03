import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

const priceArray = [
  {
    price: "$8.99",
    id: 1,
  },
];

const Popular = ({ image, title, price }) => {
  return (
    <TouchableOpacity style={styles.popularBg}>
      <Image
        resizeMode="cover"
        style={styles.recipeImg}
        source={{ uri: `${image}` }}
      />

      <View style={{ padding: 10 }}>
        <Text
          style={{
            color: "#ff781f",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          {title}
        </Text>

        <TouchableOpacity>
          {priceArray.map((price) => {
            return (
              <SafeAreaView
                style={{
                  backgroundColor: "#ff781f",
                  width: 100,
                  height: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  {price.price}
                </Text>
              </SafeAreaView>
            );
          })}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  recipeImg: {
    width: 250,
    height: 120,
    alignSelf: "stretch",
    borderRadius: 10,
    margin: 5,
  },

  popularBg: {
    backgroundColor: "#fff",
    marginBottom: 30,
    margin: 5,
    height: 240,
    borderRadius: 10,
    shadowColor: "#737373",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});

export default Popular;
