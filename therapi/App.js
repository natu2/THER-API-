//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import MenuBar from "./MenuBar";
import Goals from "./screens/Goals"; // Need to create
import Journals from "./screens/Journals"; //Need to create
import Explore from "./screens/Explore"; //Need to create

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <MenuBar {...props} />}>
        <Tab.Screen name="Goals" component={Goals} />
        <Tab.Screen name="Journals" component={Journals} />
        <Tab.Screen name="Explore" component={Explore} />
        {/* Add more screens as needed */}
      </Tab.Navigator>
    </NavigationContainer>
  );
  /**return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <>
      </>
    </View>
    
  );*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
