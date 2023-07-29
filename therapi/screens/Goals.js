/**
 *
 */

//React & Other Libary Imports
import React from "react";
import { View, Text } from "react-native";
import ProgressTracker from "../components/Progresstracker";

//Styles, Icons, Illustrations
import styles from "../styles"; // how to use style, in the <> of a component: style = styles.______ depending on what the container is

//Project File Imports
/*PASTE FILE IMPORTS HERE*/

export default function Goals() {
  const progress = 0.75;
  return (
    <View>
      <Text>Using ChatGBT!</Text>
      <ProgressTracker progress={progress} />
    </View>
  );
}
