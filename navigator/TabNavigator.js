import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Veggie from "../screens/Veggie";
import Popular from "../screens/Popular";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#111",
        tabBarInactiveTintColor: "#f5c77e",
        tabBarActiveBackgroundColor: "#ff781f",
        tabBarInactiveBackgroundColor: "#111",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Veggie",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="fastfood"
              color={focused ? "#111" : "#FF781F"}
              size={17}
            />
          ),
        }}
        name="Veggie"
        component={Veggie}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="search"
              size={17}
              color={focused ? "#111" : "#FF7815"}
            />
          ),
        }}
        name="Search"
        component={Popular}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "Popular",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-fast-food"
              color={focused ? "#111" : "#FF7815"}
              size={17}
            />
          ),
        }}
        name="Popular"
        component={Popular}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
