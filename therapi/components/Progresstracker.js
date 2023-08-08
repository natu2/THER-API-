/**
 * CLI:
 * npm install react-native-progress
 */

//React & Other Libary Imports
import React from "react";
import { View, Text, Button } from "react-native";
import * as Progress from "react-native-progress";

//File & Styling Imports
import styles from "../styles";

export default function ProgressTracker({ progress, onYes, goalName }) {
  return (
    <View>
      <Progress.Circle
        size={100}
        indeterminate={false}
        progress={progress}
        color="#AD646A"
        fill="#F9F9F9"
        borderWidth={0}
      />
      <Text> </Text>
      <Button title="Yes" onPress={onYes} />
    </View>
  );
}
