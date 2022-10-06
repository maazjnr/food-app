import { useState, useEffect } from "react";
import { SafeAreaView, View, FlatList, ScrollView } from "react-native";
import HomeHeader from "./HomeHeader";
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

  const handleSearch = (value) => {
    if (value.length === 0) {
      setFilteredDataSource(filteredDataSource);
    }

    const filteredData = filteredDataSource.filter((item) =>
      item.name
    );

    if (filteredData.length === 0) {
      setFilteredDataSource(filteredDataSource);
    } else {
      setFilteredDataSource(filteredData);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#111",
    padding: 10 }} showsHorizontalScrollIndicator={false}>
      <View>
        <View>
          <FlatList
            data={filteredDataSource}
            renderItem={({ item }) => <Searched data={item} />}
            keyExtractor={(item) => item.id}
            showVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
        </View>
      </View>
    </ScrollView>
  );
};

export default Search