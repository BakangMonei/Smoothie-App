import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Svg, { Ellipse } from "react-native-svg";

function AddNewRecipe(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1StackStack}>
        <View style={styles.rect1Stack}>
          <View style={styles.rect1}></View>
          <Text style={styles.newRecipe}>New Recipe</Text>
        </View>
        <View style={styles.rect2}></View>
      </View>
      <View style={styles.iconStack}>
        <Icon name="picture-o" style={styles.icon}></Icon>
        <Svg viewBox="0 0 186.93 187.07" style={styles.ellipse}>
          <Ellipse
            strokeWidth={3}
            cx={93}
            cy={94}
            rx={92}
            ry={92}
            stroke="rgba(0,0,0,1)"
            fill="rgba(230, 230, 230,0.33)"
          ></Ellipse>
        </Svg>
      </View>
      <View style={styles.rect3Stack}>
        <View style={styles.rect3}>
          <View style={styles.smoothieNameStack}>
            <Text style={styles.smoothieName}>Smoothie Name</Text>
            <Text style={styles.smoothieName3}>Smoothie Name</Text>
          </View>
        </View>
        <View style={styles.rect6}></View>
      </View>
      <View style={styles.rect4Stack}>
        <View style={styles.rect4}>
          <Text style={styles.ingredients}>Ingredients</Text>
        </View>
        <View style={styles.rect7}></View>
      </View>
      <View style={styles.rect5Stack}>
        <View style={styles.rect5}>
          <Text style={styles.instructions}>Instructions</Text>
        </View>
        <View style={styles.rect8}></View>
      </View>
      <View style={styles.rect9}>
        <Text style={styles.add}>ADD</Text>
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
  newRecipe: {
    top: 86,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 45,
    left: 67
  },
  rect1Stack: {
    top: 0,
    left: 0,
    width: 375,
    height: 149,
    position: "absolute"
  },
  rect2: {
    top: 93,
    left: 55,
    width: 266,
    height: 56,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect1StackStack: {
    width: 375,
    height: 149
  },
  icon: {
    top: 24,
    left: 19,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 139
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 187,
    height: 187,
    position: "absolute"
  },
  iconStack: {
    width: 187,
    height: 187,
    marginLeft: 93
  },
  rect3: {
    top: -1,
    left: 1,
    width: 266,
    height: 69,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  smoothieName: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    opacity: 0.4
  },
  smoothieName3: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    opacity: 0.4
  },
  smoothieNameStack: {
    width: 144,
    height: 24,
    marginTop: 22,
    marginLeft: 43
  },
  rect6: {
    top: -1,
    left: 0,
    width: 268,
    height: 69,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect3Stack: {
    width: 268,
    height: 69,
    marginTop: 7,
    marginLeft: 54
  },
  rect4: {
    top: 0,
    left: 0,
    width: 266,
    height: 69,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  ingredients: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    opacity: 0.4,
    marginTop: 23,
    marginLeft: 43
  },
  rect7: {
    top: 0,
    left: 0,
    width: 267,
    height: 69,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect4Stack: {
    width: 267,
    height: 69,
    marginTop: 31,
    marginLeft: 55
  },
  rect5: {
    top: 0,
    left: 0,
    width: 266,
    height: 69,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  instructions: {
    fontFamily: "roboto-700",
    color: "#121212",
    opacity: 0.4,
    fontSize: 20,
    marginTop: 22,
    marginLeft: 44
  },
  rect8: {
    top: 0,
    left: 0,
    width: 268,
    height: 69,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect5Stack: {
    width: 268,
    height: 69,
    marginTop: 33,
    marginLeft: 54
  },
  rect9: {
    width: 130,
    height: 55,
    backgroundColor: "rgba(254,163,26,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 26,
    alignSelf: "center"
  },
  add: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 30,
    marginTop: 8,
    marginLeft: 32
  }
});

export default AddNewRecipe;
