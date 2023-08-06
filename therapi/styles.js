import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#7E83C9", //just for testing purposes, pls change it
  },
  menuItem: {
    paddingHorizontal: 15,
  },

  tracker: {
    color: "#00a8ff",
    unfilledColor: "#f2f2f2",
  },

  button: {
    color: "#00a8ff",
    unfilledColor: "#f2f2f2",
  },
});

export default styles;
