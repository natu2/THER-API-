/**
 * CLI:
 * npm install react-native-progress
 */

//React & Other Libary Imports
import React from "react";
import { View, Text } from "react-native";
import { Circle as ProgressCircle } from "react-native-progress";

export default function ProgressTracker({ progress }) {
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
}
