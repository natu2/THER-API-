import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#4A515A", //just for testing purposes, pls change it
    height: 60,
  },
  menuItem: {
    paddingHorizontal: 15,
  },

  tracker: {
    backgroundColor: "#F9F9F9",
  },

  button: {
    color: "#00a8ff",
    unfilledColor: "#f2f2f2",
  },
});

export default styles;
