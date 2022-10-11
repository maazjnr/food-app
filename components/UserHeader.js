import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";

const userImage = {
  userImg: require("../assets/images/person04.png"),
};

const UserHeader = () => {
  return (
    <SafeAreaView
      style={{
        marginBottom: 20,
        backgroundColor: "#111",
        height: 150
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row-reverse",
          padding: 15,
        }}
      >
        <Image
          source={userImage.userImg}
          resizeMode="cover"
          style={{ width: 35, height: 35 }}
        />

        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 25,
            textTransform: "uppercase"
          }}
        >
          Deli RECIPE
        </Text>
      </View>

      <View style={{ marginLeft: 18 }}>
        <Text style={{ color: "#ff781f" }}>Hey, Victoria</Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 15,
            fontWeight: "bold",
            paddingTop: 5,
          }}
        >
          Let's get Recipe Foods
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default UserHeader;
