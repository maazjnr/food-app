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

        <TouchableOpacity
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
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
                  flexDirection: "row",
                  marginTop: 10,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#fff"
                  }}
                >
                  {price.price}
                </Text>
              </SafeAreaView>
            );
          })}

          <View>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              ⭐4.7  {""}
              <Text style={{ fontWeight: "100", color: "#777" }}>
                941 Rating
              </Text>
              
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={{paddingLeft: 10, color:"#777"}}>Olivia Food</Text>
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
    margin: 5,
    height: 260,
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
