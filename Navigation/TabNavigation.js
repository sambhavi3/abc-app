import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BigAbcScreen from "../screens/bigAbcScreen";
import SmallAbcScreen from "../screens/smallAbcScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="BigAbcScreen" component={BigAbcScreen} />
            <Tab.Screen name="SmallAbcScreen" component={SmallAbcScreen} />
        </Tab.Navigator>
    );
}

export default  BottomTabNavigator;