import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import TabNavigator from './navigator/TabNavigator';
import Home from './screens/Home';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json'


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};


const Stack = createStackNavigator();

export default function App() {
  return (
    <TailwindProvider utilities={utilities} >
    <NavigationContainer theme={theme}>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
  </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
