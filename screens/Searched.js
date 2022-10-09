import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const Searched = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        placeholder="Search Recipe"
        style={styles.input}
        value={props.searchText}
        onChangeText={(text) => props.setSearchText(text)}
        onSubmitEditing={props.onSubmit}
      />

      <Image
        source={props.urlToImage}
        resizeMode="cover"
        style={{ width: 300, height: 300 }}
      />

      <Text>{props.title}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },

  input: {
    backgroundColor: "#999",
    padding: 10,
    borderRadius: 10,
    color: "#111",
    borderWidth: 1,
  },
});

export default Searched;
