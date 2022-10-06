import { View, Text, Image } from "react-native";
import React, { useState } from "react";

const Searched = ({ item }) => {
  const [input, setInput] = useState("");

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Text>
        {item.title.toUpperCase()}
      </Text>

      <Image
        source={item.image}
        style={{ width: 350, height: 350 }}
        resizeMode="cover"
      />
    </View>
  );
};

export default Searched;
