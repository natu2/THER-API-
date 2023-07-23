//React & Other Libary Imports
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

//Styles, Icons, Illustrations
import styles from "./styles";

//Project File Imports
/*PASTE FILE IMPORTS HERE*/

const MenuBar = ({ navigation }) => {
  const handleNavigate = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleNavigate("Home")}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleNavigate("Journals")}
      >
        <Text>Journals</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleNavigate("Goals")}
      >
        <Text>Goals</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleNavigate("Explore")}
      >
        <Text>Explore</Text>
      </TouchableOpacity>
    </View>
  );
};

/**const styles = StyleSheet.create({
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
});*/

export default MenuBar;
