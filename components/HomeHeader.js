import { View, Text, Image, TextInput } from "react-native";

const HomeHeader = ({ onSearch }) => {
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
            placeholder="Search NFTs"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
