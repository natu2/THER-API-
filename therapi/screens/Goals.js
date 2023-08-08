/**
 *
 */
//React & Other Libary Imports
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
//import { Circle as ProgressCircle } from "react-native-progress";

//Styles, Icons, Illustrations
import styles from "../styles"; // how to use style, in the <> of a component: style = styles.______ depending on what the container is
import ProgressTracker from "../components/Progresstracker";
import AddNewGoal from "./AddNewGoal";

//Global Vars

export default function Goals() {
  //For Progress Trackers
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);

  const [createGoal, setCreateGoal] = useState(false);
  const [goalList, setGoalList] = useState([]);

  function addGoal() {
    setCreateGoal(true);
  }

  function updateProgress1() {
    setProgress1((prevProgress) => prevProgress + 10);
  }

  function updateProgress2() {
    setProgress2((prevProgress) => prevProgress + 10);
  }

  function updateProgress3() {
    setProgress3((prevProgress) => prevProgress + 10);
  }

  //TODO: Better back method from AddNewGoals page
  return (
    <View>
      {createGoal ? (
        <AddNewGoal
          onDone={() => setCreateGoal(false)}
          onSubmit={(newGoal) => {
            setGoalList([...goalList, newGoal]); //copy og array and put in newGoal at the end
            setCreateGoal(false);
          }}
        />
      ) : (
        <View style={styles.tracker}>
          <ProgressTracker
            progress={progress1 / 100}
            onYes={updateProgress1}
            goalName=""
          />
          <ProgressTracker
            progress={progress2 / 100}
            onYes={updateProgress2}
            goalName=""
          />
          <ProgressTracker
            progress={progress3 / 100}
            onYes={updateProgress2}
            goalName=""
          />
          <Button style={styles.button} title="New Goal" onPress={addGoal} />
          <Text> Did you do?</Text>
          <Text> Goal Name = {goalList[0]?.goalName || " "}</Text>
          <Text> Goal Lenght = {goalList.length}</Text>
        </View>
      )}
    </View>
  );
}
