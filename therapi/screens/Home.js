//React & Other Libary Imports
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

//Styles, Icons, Illustrations
import styles from "../styles";

//Project File Imports
import YT_Profile_icon from "../assets/YT_Profile_icon.png";

export default function Home() {
  const barHeight = 50;
  const navigation = useNavigation();
  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text
        style={{
          height: barHeight,
          width: 300,
          textAlign: "center",
          textAlignVertical: "center",
          color: "#4A515A", //dark gray
          fontFamily: "serif",
          fontWeight: "normal",
          letterSpacing: 2,
          fontSize: 20,
        }}
      >
        Welcome back, Dayna
      </Text>
      <TouchableOpacity onPress={goToProfile}>
        <Image
          style={{
            height: barHeight,
            width: 50,
          }}
          source={YT_Profile_icon}
        ></Image>
      </TouchableOpacity>
    </View>
  );
}
