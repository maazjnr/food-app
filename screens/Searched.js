import { View, Text, FlatList, Image, ScrollView } from "react-native";
import React from "react";

const Searched = ({ data, input, setInput }) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111",
        width: "100%",
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (input === "") {
            return (
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    color: "#FF7815",
                    textAlign: "center",
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  {item.title}
                </Text>
                <Image
                  resizeMode="cover"
                  style={{ width: "100%", height: 330, borderRadius: 10 }}
                  source={{ uri: `${item.image}` }}
                />
              </View>
            );
          }

          if (item.title.toLowerCase().includes(input.toLowerCase)) {
            <View>
              <Text>{item.title}</Text>
            </View>;
          }
        }}
      />
    </ScrollView>
  );
};

export default Searched;
