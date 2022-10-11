import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Searched = ({data, input, setInput}) => {
  return (
    <View>

      <FlatList data={data} 
      renderItem={({item}) => {
      if(input === "") {
        return (
          <View>
            <Text>{item.title}</Text>
          </View>
        )
      }

      if(item.title.toLowerCase().includes((input.toLowerCase))){
        <View>
        <Text>{item.title}</Text>
      </View>
      }

      }} />
    </View>
  )
}

export default Searched