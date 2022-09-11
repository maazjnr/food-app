import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { ImageBackground,TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'react-native';

const ScreenImg = {
    images: require("../assets/images/Untitled-2.png")
  };

const Home = () => {

const navigation = useNavigation();

  return (
  
    <ImageBackground source={ScreenImg.images} style={styles.homeContainer}
    showHorizontalScrollIndicator={false}>
      <StatusBar />
          <SafeAreaView style={styles.safeV}>
      <View style={{marginTop: 200}}>
        <Text style={styles.titleText}>Foods Recipe Experience</Text>
        <Text style={styles.tourText}>Let's Take a tour on amazing foods Recipe</Text>
      </View>

      <TouchableOpacity style={styles.getStartedBtn} 
      onPress={() => navigation.navigate("Details")}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>

  )
}


const styles = StyleSheet.create({
    homeContainer: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#000',
      textAlign: "center",
    },
  
    titleText: {
      color: "white",
      fontSize: 40,
      fontWeight: "bold",
      textAlign: "center"
    },
  
    getStartedBtn: {
      backgroundColor: '#ff781f',
      width: 200,
      height: 60,
      borderRadius: 50,
      justifyContent: "center",
      marginTop: 50
    },
  
    btnText: {
      color: "white",
      textAlign: "center",
      fontSize: 17,
      fontWeight: "bold"
      
    },
  
    tourText: {
      color: 'white',
      fontSize: 16,
      marginTop: 30
    },

    safeV: {
      justifyContent: "center",
      alignItems: "center"
    }
  });
  

export default Home