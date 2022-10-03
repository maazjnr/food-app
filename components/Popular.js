import {
    View,
    Text,
    StyleSheet,
    Image,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { TouchableOpacity } from "react-native";

const Popular = ({image}) => {
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
        recipeImg: {
            width: 250,
            height: 160,
            alignSelf: "stretch",
            borderRadius: 10,
          },

          cardContainer: {
            width: "100%",
            height: 300,
          }
    })

export default Popular