import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, Button, Alert } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Clickesh"
        color="orange"
        onPress={() => {
          Alert.alert("Clickeshed", "You clicked me :)", [
            { text: "Yaas" },
            { text: "noooo!" },
          ]);
        }}
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    borderRadius: 30,
  },
  text: {
    fontFamily: "monospace",
    fontWeight: "bold",
    marginTop: 32,
    color: "#333",
    fontSize: 20,
  },
});
