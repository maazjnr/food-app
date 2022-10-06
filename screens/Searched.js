import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";

const Searched = ({ data }) => {
  const [input, setInput] = useState("");

  return (
    <ScrollView
      contentContainerStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Image
        source={data.image}
        style={{ width: 350, height: 350, borderRadius: 10 }}
        resizeMode="cover"
      />

      <Text style={{ padding: 10, fontSize: 10
       }}>{data.title.toUpperCase()}</Text>
    </ScrollView>
  );
};

export default Searched
