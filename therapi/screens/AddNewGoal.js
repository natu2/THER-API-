/**
 * CLI: npm install @react-native-picker/picker
 */

//React & Other Libary Imports
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

//Styles, Icons, Illustrations
import styles from "../styles"; // how to use style, in the <> of a component: style = styles.______ depending on what the container is
import Goals from "./Goals";
import goalsData from "./GoalData";

//Project File Imports
/*PASTE FILE IMPORTS HERE*/

export default function AddNewGoal() {
  //State
  const [finish, setFinish] = useState(false);

  //Options
  const colorOptions = ["Red", "Green", "Blue"];
  const durationOptions = ["1 Month", "2 Weeks", "1 Week"];
  const freqOptions = ["Every Month", "Every Day", "3 Times a Week"];

  //Data
  const [goal_name, setGoalName] = useState("");
  const [goal_color, setGoalColor] = useState("");
  const [goal_duration, setGoalDuration] = useState("");
  const [goal_freq, setGoalFreq] = useState("");

  function handleBackButton() {
    setFinish(true);
  }

  function handleCreateButton() {
    const newGoal = {
      goal_color,
      goal_duration,
      goal_freq,
    };

    //TODO: Add conditional, only 3 goals
    goalsData.push(newGoal);
  }

  return (
    <View>
      {finish ? (
        <Goals />
      ) : (
        <View>
          <Button title="Back" onPress={handleBackButton}></Button>
          <Text>Create Goal</Text>
          <Text> Name </Text>
          <TextInput placeholder="Ex: Walk More"></TextInput>
          <Text> Color </Text>
          <Picker
            selectedValue={goal_color}
            onValueChange={(itemValue) => setGoalColor(itemValue)}
          >
            <Picker.Item
              label={colorOptions[0]}
              value={colorOptions[0]}
              color="#AD646A"
            />
            <Picker.Item
              label={colorOptions[1]}
              value={colorOptions[1]}
              color="#4BA571"
            />
            <Picker.Item
              label={colorOptions[2]}
              value={colorOptions[2]}
              color="#346D93"
            />
          </Picker>
          <Text> Duration of Goal </Text>
          <Picker
            selectedValue={goal_duration}
            onValueChange={(itemValue) => setGoalDuration(itemValue)}
          >
            <Picker.Item label={durationOptions[0]} value={30} />
            <Picker.Item label={durationOptions[1]} value={14} />
            <Picker.Item label={durationOptions[2]} value={7} />
          </Picker>
          <Text> Frequency of Goal </Text>
          <Picker
            selectedValue={goal_freq}
            onValueChange={(itemValue) => setGoalFreq(itemValue)}
          >
            <Picker.Item label={freqOptions[0]} value={freqOptions[0]} />
            <Picker.Item label={freqOptions[1]} value={freqOptions[1]} />
            <Picker.Item label={freqOptions[2]} value={freqOptions[2]} />
          </Picker>

          <Button title="Create Goal" onPress={handleCreateButton}></Button>
        </View>
      )}
    </View>
  );
}
