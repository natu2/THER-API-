import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MenuBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Screen1")}
      >
        <Text>Screen 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Screen2")}
      >
        <Text>Screen 2</Text>
      </TouchableOpacity>
      {/* Add more menu items as needed */}
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
