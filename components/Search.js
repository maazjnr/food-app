import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Searched from '../screens/Searched'
import axios from 'axios'

const Search = () => {

  const [searchText, setSearchText] = useState('')
  const [data, setData] = useState('')

  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
    params: {tags: 'vegetarian,dessert', number: '1'},
    headers: {
      'X-RapidAPI-Key': 'dc811aafffmsh7cf2c61db109937p1ffcfajsne527db6bea89',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    setData(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  return (
    <View style={styles.container}>
     <Searched 
     searchText={searchText} 
     setSearchText={setSearchText}
     />
     <Text>{searchText}</Text>
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