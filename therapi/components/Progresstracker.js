/**
 * CLI:
 * npm install react-native-progress
 */

//React & Other Libary Imports
import React from "react";
import { View, Text } from "react-native";
import { Circle } from "react-native-progress";
import styles from "../styles";

//File & Styling Imports

export default function ProgressTracker({ progress }) {
  return (
    <View>
      <Circle
        animated
        size={100}
        progress={progress}
        endAngle={progress}
        thickness={8}
        unfilledColor="#FF0000"
        fill="#F9F9F9"
      />
      <Text style={{ marginTop: 10 }}>{`${Math.round(progress)}%`}</Text>
    </View>
  );
}
