import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("./assets/favicon.png")} />
      <Text style={styles.text}>Hello React Native!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333344",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 20,
    color: "#ccc",
    fontSize: 20,
  },
});
