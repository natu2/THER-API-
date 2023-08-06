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
import goalsData from "./GoalData";

//Global Vars

export default function Goals() {
  const progress1 = 75;
  const progress2 = 86;
  const progress3 = 100;
  const [createGoal, setCreateGoal] = useState(false);
  const [goalList, setGoalList] = useState([]);

  function addGoal() {
    setCreateGoal(true);
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
        <View>
          <ProgressTracker progress={progress1} />
          <ProgressTracker progress={progress2} />
          <ProgressTracker progress={progress3} />
          <Button style={styles.button} title="New Goal" onPress={addGoal} />
          <Text> Number of Goals = {goalList.length}</Text>
        </View>
      )}
    </View>
  );
}
