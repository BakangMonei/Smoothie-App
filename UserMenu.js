import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";

function UserMenu(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect5Stack}>
        <View style={styles.rect5}>
          <View style={styles.icon1StackStack}>
            <View style={styles.icon1Stack}>
              <EntypoIcon name="user" style={styles.icon1}></EntypoIcon>
              <View style={styles.rect8}></View>
            </View>
            <View style={styles.rect2Stack}>
              <View style={styles.rect2}>
                <Text style={styles.helloUser}>Hello User</Text>
              </View>
              <View style={styles.rect7}></View>
            </View>
          </View>
        </View>
        <View style={styles.rect9}></View>
      </View>
      <View style={styles.icon3StackStackRow}>
        <View style={styles.icon3StackStack}>
          <View style={styles.icon3Stack}>
            <FontAwesomeIcon
              name="shopping-basket"
              style={styles.icon3}
            ></FontAwesomeIcon>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("RecipeList")}
              style={styles.button}
            ></TouchableOpacity>
          </View>
          <View style={styles.rect4Stack}>
            <View style={styles.rect4}></View>
            <Text style={styles.smoothies}>Smoothies</Text>
          </View>
        </View>
        <View style={styles.icon2StackStack}>
          <View style={styles.icon2Stack}>
            <FeatherIcon name="settings" style={styles.icon2}></FeatherIcon>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Settings")}
              style={styles.button2}
            ></TouchableOpacity>
          </View>
          <View style={styles.rect3Stack}>
            <View style={styles.rect3}></View>
            <Text style={styles.settings}>Settings</Text>
          </View>
        </View>
      </View>
      <View style={styles.rect6Stack}>
        <View style={styles.rect6}></View>
        <Text style={styles.menu}>MENU</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,221,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderStyle: "solid"
  },
  rect5: {
    top: 0,
    left: 0,
    width: 375,
    height: 93,
    position: "absolute",
    backgroundColor: "rgba(254,163,26,1)"
  },
  icon1: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    height: 56,
    width: 50
  },
  rect8: {
    top: 1,
    left: 1,
    width: 50,
    height: 50,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  icon1Stack: {
    top: 0,
    left: 0,
    width: 51,
    height: 56,
    position: "absolute"
  },
  rect2: {
    top: 0,
    left: 0,
    width: 105,
    height: 28,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  helloUser: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 6,
    marginLeft: 20
  },
  rect7: {
    top: 0,
    left: 0,
    width: 108,
    height: 28,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect2Stack: {
    top: 28,
    left: 50,
    width: 108,
    height: 28,
    position: "absolute"
  },
  icon1StackStack: {
    width: 158,
    height: 56,
    marginTop: 37,
    marginLeft: 9
  },
  rect9: {
    top: 0,
    left: 0,
    width: 376,
    height: 94,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect5Stack: {
    width: 376,
    height: 94
  },
  icon3: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 104
  },
  button: {
    top: 0,
    left: 0,
    width: 120,
    height: 139,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  icon3Stack: {
    top: 0,
    left: 0,
    width: 120,
    height: 139,
    position: "absolute"
  },
  rect4: {
    top: 2,
    left: 0,
    width: 110,
    height: 24,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  smoothies: {
    top: 0,
    left: 7,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20
  },
  rect4Stack: {
    top: 114,
    left: 0,
    width: 110,
    height: 26,
    position: "absolute"
  },
  icon3StackStack: {
    width: 120,
    height: 140
  },
  icon2: {
    top: 0,
    left: 20,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 104
  },
  button2: {
    top: 1,
    left: 0,
    width: 146,
    height: 140,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  icon2Stack: {
    top: 0,
    left: 0,
    width: 146,
    height: 141,
    position: "absolute"
  },
  rect3: {
    top: 0,
    left: 0,
    width: 104,
    height: 22,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  settings: {
    top: 0,
    left: 14,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20
  },
  rect3Stack: {
    top: 116,
    left: 20,
    width: 104,
    height: 24,
    position: "absolute"
  },
  icon2StackStack: {
    width: 146,
    height: 141,
    marginLeft: 61
  },
  icon3StackStackRow: {
    height: 141,
    flexDirection: "row",
    marginTop: 107,
    marginLeft: 34,
    marginRight: 14
  },
  rect6: {
    top: 10,
    left: 0,
    width: 266,
    height: 56,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  menu: {
    top: 0,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 45,
    left: 63
  },
  rect6Stack: {
    width: 266,
    height: 66,
    marginTop: -228,
    marginLeft: 55
  }
});

export default UserMenu;
