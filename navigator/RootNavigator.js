import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();

const RootNavigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Group>
                <RootStack.Screen name="Main" component={TabNavigator} />
            </RootStack.Group>
        </RootStack.Navigator>
      )
}

export default RootNavigator