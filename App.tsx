import React from "react";
import { SafeAreaView, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 400,
          borderRadius: 999,
        }}
      />
      <View style={{ backgroundColor: "lightblue", width: 50, height: 100 }} />
      <View
        style={{
          backgroundColor: "tomato",
          width: 55,
          height: 25,
        }}
      />
    </View>
  );
}
