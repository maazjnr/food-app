import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {useNavigation} from '@react-navigation/native';
import Veggie from '../screens/Veggie';
import Popular from '../screens/Popular';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator()

const TabNavigator = () => {

    return (
        <Tab.Navigator>

          <Tab.Screen options={{
            tabBarLabel: 'Veggie',
            tabBarIcon: ({focused}) => (
              <MaterialIcons name="fastfood" color={focused ? "#ff781f" : "black"} size={26} />
            )
          }} name="Veggie" component={Veggie} />
          
          <Tab.Screen options={{
            tabBarLabel: 'Popular',
            tabBarIcon: ({focused}) => (
              <Ionicons name="ios-fast-food" color={focused ? "#ff781f" : "black"} size={26} />
            )
          }} name="Popular" component={Popular} />

        </Tab.Navigator>

      );
}

export default TabNavigator
