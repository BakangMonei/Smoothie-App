import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

function Favorite(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}></View>
        <Text style={styles.text}>Favorite</Text>
        <View style={styles.rect2}></View>
      </View>
      <View style={styles.iconColumnRow}>
        <View style={styles.iconColumn}>
          <FontAwesomeIcon name="star" style={styles.icon}></FontAwesomeIcon>
          <MaterialIconsIcon
            name="delete"
            style={styles.icon2}
          ></MaterialIconsIcon>
        </View>
        <View style={styles.button2Stack}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Smoothiee")}
            style={styles.button2}
          >
            <View style={styles.loremIpsum1Stack}>
              <Text style={styles.loremIpsum1}>
                Pineapple, mango, banana, {"\n"}coconut milk &amp; Lemon Juice.
              </Text>
              <Text style={styles.tropicalParadise1}>Tropical Paradise</Text>
              <View style={styles.rect4}></View>
            </View>
          </TouchableOpacity>
          <Image
            source={require("./assets/green_goddess.jpeg")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Smoothiee")}
            style={styles.button}
          ></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,221,1)"
  },
  rect1: {
    top: 0,
    left: 0,
    width: 375,
    height: 93,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(254,163,26,1)"
  },
  text: {
    top: 86,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 45,
    left: 78
  },
  rect2: {
    top: 93,
    left: 54,
    width: 266,
    height: 56,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect1Stack: {
    width: 375,
    height: 149
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    marginTop: 6
  },
  iconColumn: {
    width: 40,
    marginTop: 24,
    marginBottom: 26
  },
  button2: {
    top: 24,
    left: 0,
    width: 330,
    height: 86,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  loremIpsum1: {
    top: 24,
    left: 2,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 17
  },
  tropicalParadise1: {
    top: 0,
    left: 2,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 21
  },
  rect4: {
    top: 0,
    left: 0,
    width: 230,
    height: 76,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  loremIpsum1Stack: {
    width: 230,
    height: 76,
    marginTop: 5,
    marginLeft: 100
  },
  image1: {
    top: 0,
    left: 9,
    width: 73,
    height: 136,
    position: "absolute"
  },
  button: {
    top: 24,
    left: 1,
    width: 329,
    height: 86,
    position: "absolute"
  },
  button2Stack: {
    width: 331,
    height: 136,
    marginLeft: 5
  },
  iconColumnRow: {
    height: 136,
    flexDirection: "row",
    marginTop: 24,
    marginRight: -1
  }
});

export default Favorite;
