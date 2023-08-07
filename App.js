//React & Other Libary Imports
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//Styles, Icons, Illustrations
import styles from "./styles";

//Project File Imports
import MenuBar from "./MenuBar";
import Goals from "./screens/Goals";
import Journals from "./screens/Journals";
import Explore from "./screens/Explore";
import Home from "./screens/Home";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator tabBar={(props) => <MenuBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Goals" component={Goals} />
        <Tab.Screen name="Journals" component={Journals} />
        <Tab.Screen name="Explore" component={Explore} />
        {/* Add more screens as needed */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
