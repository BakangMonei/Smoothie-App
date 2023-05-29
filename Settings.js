import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialHeader1 from "./components/MaterialHeader1";
import MaterialSlider1 from "./components/MaterialSlider1";
import MaterialSwitch from "./components/MaterialSwitch";

function Settings(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}></View>
      <MaterialHeader1 style={styles.materialHeader1}></MaterialHeader1>
      <View style={styles.reSizeFontStack}>
        <Text style={styles.reSizeFont}>Re-Size Font</Text>
        <View style={styles.rect2}>
          <MaterialSlider1 style={styles.materialSlider1}></MaterialSlider1>
        </View>
      </View>
      <View style={styles.materialSwitchStack}>
        <MaterialSwitch style={styles.materialSwitch}></MaterialSwitch>
        <View style={styles.rect3}>
          <Text style={styles.themeMode}>Theme Mode</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect1: {
    width: 375,
    height: 70,
    backgroundColor: "rgba(254,163,26,1)"
  },
  materialHeader1: {
    height: 56,
    width: 380,
    borderWidth: 1,
    borderColor: "#000000"
  },
  reSizeFont: {
    top: 0,
    left: 1,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 35
  },
  rect2: {
    top: 1,
    left: 0,
    width: 369,
    height: 49,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  materialSlider1: {
    height: 30,
    width: 150,
    marginTop: 9,
    marginLeft: 214
  },
  reSizeFontStack: {
    width: 369,
    height: 50,
    marginTop: 65,
    marginLeft: 5
  },
  materialSwitch: {
    width: 71,
    height: 49,
    position: "absolute",
    left: 266,
    top: 3
  },
  rect3: {
    top: -1,
    left: 0,
    width: 369,
    height: 55,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  themeMode: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 30,
    marginTop: 6,
    marginLeft: 1
  },
  materialSwitchStack: {
    width: 369,
    height: 55,
    marginTop: 33,
    marginLeft: 5
  }
});

export default Settings;
