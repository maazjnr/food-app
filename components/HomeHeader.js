import { View, Text, Image, TextInput } from "react-native";
import React, {useLayoutEffect} from "react";
import { useNavigation } from "@react-navigation/native";

const HomeHeader = ({ onSearch }) => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 5,
          paddingRight: 5,
        }}
      ></View>

      <View>
        <View
          style={{
            width: "100%",
            borderRadius: 10,
            backgroundColor: "gray",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 0,
            paddingVertical: 0,
          }}
        >
          <TextInput
            placeholder="Search Food Recipe"
            style={{ flex: 1, height: 50,
            padding: 30 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
