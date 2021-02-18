import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialButtonDark from "../components/MaterialButtonDark";

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.rect}>
          <Image
            source={require("../assets/images/federico-di-dio-photography-JWHSIG1kM2c-unsplash1.jpg")}
            resizeMode="cover"
            style={styles.image}
          ></Image>
        </View>
      </View>
      <Text style={styles.goodEvening}>Good Evening!</Text>
      <MaterialButtonDark
        style={styles.materialButtonDark}
      ></MaterialButtonDark>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  group: {
    width: 245,
    height: 245,
    marginTop: 106,
    marginLeft: 65,
  },
  rect: {
    width: 245,
    height: 245,
    shadowColor: "rgba(103,237,152,1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 150,
    shadowOpacity: 1,
    shadowRadius: 50,
    borderRadius: 56,
  },
  image: {
    width: 245,
    height: 245,
    borderRadius: 25,
  },
  goodEvening: {
    fontFamily: require("../assets/fonts/poppins-regular.ttf"),
    color: "#121212",
    fontSize: 32,
    marginTop: 54,
    marginLeft: 73,
  },
  materialButtonDark: {
    height: 36,
    width: 230,
    borderRadius: 100,
    backgroundColor: "rgba(120,181,152,0.88)",
    marginTop: 257,
    marginLeft: 73,
  },
});

export default Home;
