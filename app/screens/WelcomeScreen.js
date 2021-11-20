import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

import BaseButton from "../components/BaseButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      resizeMode="cover"
      blurRadius={5}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.content}>
        <Image style={styles.image} source={require("../assets/airbnb.png")} />
        <Text style={styles.text}>Sell what you don't need!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <BaseButton title="login" />
        <BaseButton title="register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: "20%",
    alignItems: "center",
  },
  image: {
    height: 120,
    width: 80,
  },
  text: {
    fontSize: 25,
    fontWeight: "700",
  },
  buttonsContainer: {
    padding: 20,
  },
});
