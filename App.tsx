import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

export default function App() {
  console.log(useDimensions());
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    backgroundColor: "#333",
    width: "100%",
    height: "30%",
  },
});
