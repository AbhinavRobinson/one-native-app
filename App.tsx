import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          width: 300,
          height: 300,
          uri: "https://picsum.photos/1080/1920",
        }}
        resizeMode="cover"
        style={styles.image}
      />
      <Text style={styles.text}>A random image for you 😇</Text>
      <StatusBar style="auto" />
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
