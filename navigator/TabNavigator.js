import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {useNavigation} from '@react-navigation/native';
import Veggie from '../screens/Veggie';
import Popular from '../screens/Popular';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator()

const TabNavigator = () => {

    return (
        <Tab.Navigator tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#FFF',
          activeBackgroundColor: '#ff781f',
          inactiveBackgroundColor: '#111',
              style: {
                    backgroundColor: '#CE4418',
              }
       }}>

          <Tab.Screen options={{
            tabBarLabel: 'Veggie',
            tabBarIcon: ({focused}) => (
              <MaterialIcons name="fastfood" color={focused ? "#111" : "#FF781F"} size={26} />
            )
          }} name="Veggie" component={Veggie} />
          
          <Tab.Screen options={{
            tabBarLabel: 'Popular',
            tabBarIcon: ({focused}) => (
              <Ionicons name="ios-fast-food" color={focused ? "#111" : "#FF7815"} size={26} />
            )
          }} name="Popular" component={Popular}/>

        </Tab.Navigator>

      );
}

export default TabNavigator
