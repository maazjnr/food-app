import React, { useState, useEffect } from "react";
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Image,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import Searched from "../screens/Searched";

const Search = () => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const myApi = "dc08124ff78a4ea9855372247525457d";

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${myApi}&number=3`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson.results);
        setMasterDataSource(responseJson.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };



  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={(text) => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Search Here"
      />

      <EvilIcons
        style={{
          position: "absolute",
          padding: 20,
          right: 5,
        }}
        onPress={masterDataSource}
        name="search"
        size={24}
        color="black"
      />
      <FlatList
        data={filteredDataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={({item}) => <Searched item={item} />} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    marginBottom: 20,
    borderColor: "#ff701f",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
});

export default Search;












// const searchDataReq = () => {

//   const options = {
//     method: 'GET',
//     url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
//     params: {tags: 'vegetarian,dessert', q: searchText,  number: '1'},
//     headers: {
//       'X-RapidAPI-Key': 'dc811aafffmsh7cf2c61db109937p1ffcfajsne527db6bea89',
//       'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//     }
//   };

//   axios.get(options).then(function (response) {
//     setMyData(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });

// }



const myApi = "dc08124ff78a4ea9855372247525457d";

const [searchText, setSearchText] = useState('')
const [myData, setMyData] = useState([])

const searchDataReq = () => {
fetch(
  `https://api.spoonacular.com/recipes/complexSearch?apiKey=${myApi}&number=3`
)
  .then((response) => response.json())
  .then((responseJson) => {
    setMyData(responseJson.results);
   
  })
  .catch((error) => {
    console.error(error);
  });

}

useEffect(() => {
searchDataReq()
}, []);

