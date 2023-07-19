import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MenuBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Journals.js")}
      >
        <Text>Journals</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Goals.js")}
      >
        <Text>Goals</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Explore.js")}
      >
        <Text>Explore</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#f0f0f0",
  },
  menuItem: {
    paddingHorizontal: 15,
  },
});

export default MenuBar;
