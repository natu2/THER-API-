/**
 * CLI:
 * npm install react-native-progress
 */

//React & Other Libary Imports
import React from "react";
import { View, Text } from "react-native";
/**import { Circle } from "react-native-progress";
import { CircleSnail } from "react-native-progress";
import { Bar } from "react-native-progress"; 
<Circle size={100} progress={progress / 100} />*/

import styles from "../styles";

//File & Styling Imports

export default function ProgressTracker({ progress }) {
  return (
    <View>
      <Text style={{ marginTop: 10 }}>{`${Math.round(progress)}%`}</Text>
    </View>
  );
}
