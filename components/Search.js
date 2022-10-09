import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Searched from '../screens/Searched'
import axios from 'axios'

const Search = () => {

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


  return (
    <View style={styles.container}>
     <Searched 
     searchText={searchText} 
     setSearchText={setSearchText}
     onSubmit={searchDataReq}
     />
     <FlatList data={myData}
     renderItem={({item}) => <Searched
     urlToImage={item.image}
     title={item.title}
     /> } keyExtractor={(item) => item.title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})

export default Search