import  React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigation";
import SmallAbcScreen from "../screens/smallAbcScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="BigAbcScreen" component={TabNavigator} />
     <Drawer.Screen name="SmallAbcScreen" component={SmallAbcScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;