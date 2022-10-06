import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-web";

const Searched = ({ data }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        paddingTop: 30,
      }}

      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={{
        width: "100%"
      }}>
      <Image
        source={data.image}
        style={{ width: "100%", height: 350, borderRadius: 10 }}
        resizeMode="cover"
      />

      <View>
        <Text style={{ padding: 10, fontSize: 10,
        color: "#ff781f", textAlign: "center" }}>
          {data.title.toUpperCase()}
        </Text>
      </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Searched;
