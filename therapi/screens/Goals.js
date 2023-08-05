/**
 *
 */

//React & Other Libary Imports
import React from "react";
import { View, Text } from "react-native";
//import { Circle as ProgressCircle } from "react-native-progress";

//Styles, Icons, Illustrations
import styles from "../styles"; // how to use style, in the <> of a component: style = styles.______ depending on what the container is
import ProgressTracker from "../components/Progresstracker";

//Project File Imports
/*PASTE FILE IMPORTS HERE*/
/** 
function ProgressTracker({ progress }) {
  return (
    <View style={{ alignItems: "center" }}>
      <ProgressCircle
        size={100}
        progress={progress}
        showsText
        thickness={8}
        color="#00a8ff"
        unfilledColor="#f2f2f2"
      />
      <Text style={{ marginTop: 10 }}>{`${Math.round(progress * 100)}%`}</Text>
    </View>
  );
}*/

export default function Goals() {
  const progress = 0.75;
  return (
    <View>
      <Text>Testing</Text>
      <ProgressTracker progress={progress} />
    </View>
  );
}
