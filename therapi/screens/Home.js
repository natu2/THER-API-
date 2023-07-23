//React & Other Libary Imports
import React from "react";
import { View, Text } from "react-native";

//Styles, Icons, Illustrations
import styles from "../styles"; // how to use style, in the <> of a component: style = styles.______ depending on what the container is

//Project File Imports
/*PASTE FILE IMPORTS HERE*/

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
    </View>
  );
}
