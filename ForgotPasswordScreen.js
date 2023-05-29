import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function ForgotPasswordScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}></View>
        <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
        <View style={styles.rect5}></View>
      </View>
      <View style={styles.forgotPasswordStack}>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
        <View style={styles.rect4}></View>
      </View>
      <View style={styles.icon1Row}>
        <EntypoIcon name="mail" style={styles.icon1}></EntypoIcon>
        <View style={styles.email1Stack}>
          <Text style={styles.email1}>Email</Text>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.username1}>Username</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.icon2Row}>
        <EntypoIcon name="lock" style={styles.icon2}></EntypoIcon>
        <View style={styles.password1Stack}>
          <Text style={styles.password1}>Password</Text>
          <View style={styles.rect2}>
            <Text style={styles.password2}>Password</Text>
          </View>
        </View>
      </View>
      <View style={styles.icon3Row}>
        <EntypoIcon name="lock" style={styles.icon3}></EntypoIcon>
        <View style={styles.password3Stack}>
          <Text style={styles.password3}>Password</Text>
          <View style={styles.rect3}>
            <Text style={styles.verifyPassword}>Verify Password</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.change}>CHANGE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,221,1)"
  },
  rect1: {
    top: 14,
    left: 0,
    width: 375,
    height: 93,
    position: "absolute",
    backgroundColor: "rgba(254,163,26,1)"
  },
  loremIpsum: {
    top: 0,
    left: 52,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rect5: {
    top: 8,
    left: 0,
    width: 375,
    height: 99,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect1Stack: {
    width: 375,
    height: 107,
    marginTop: -14
  },
  forgotPassword: {
    top: 0,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 45,
    left: 4
  },
  rect4: {
    top: 10,
    left: 0,
    width: 355,
    height: 53,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  forgotPasswordStack: {
    width: 355,
    height: 63,
    marginTop: 21,
    marginLeft: 10
  },
  icon1: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    marginTop: 4
  },
  email1: {
    top: 15,
    left: 16,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    opacity: 0.5,
    fontSize: 20
  },
  button1: {
    top: 0,
    width: 232,
    height: 54,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    left: 0,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 3,
      width: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#000000"
  },
  username1: {
    fontFamily: "roboto-700",
    color: "#121212",
    opacity: 0.5,
    fontSize: 20,
    marginTop: 15,
    marginLeft: 16
  },
  email1Stack: {
    width: 232,
    height: 54,
    marginLeft: 16
  },
  icon1Row: {
    height: 54,
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 53,
    marginRight: 34
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    marginTop: 9
  },
  password1: {
    top: 15,
    left: 18,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    opacity: 0.5,
    fontSize: 20
  },
  rect2: {
    top: 0,
    width: 232,
    height: 54,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    left: 0,
    overflow: "hidden",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "#000000"
  },
  password2: {
    fontFamily: "roboto-700",
    color: "#121212",
    opacity: 0.5,
    fontSize: 20,
    marginTop: 15,
    marginLeft: 18
  },
  password1Stack: {
    width: 232,
    height: 54,
    marginLeft: 16
  },
  icon2Row: {
    height: 55,
    flexDirection: "row",
    marginTop: 43,
    marginLeft: 52,
    marginRight: 35
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    marginTop: 8
  },
  password3: {
    top: 15,
    left: 18,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    opacity: 0.5,
    fontSize: 20
  },
  rect3: {
    top: 0,
    width: 232,
    height: 54,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    left: 0,
    overflow: "hidden",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "#000000"
  },
  verifyPassword: {
    fontFamily: "roboto-700",
    color: "#121212",
    opacity: 0.5,
    fontSize: 20,
    marginTop: 15,
    marginLeft: 18
  },
  password3Stack: {
    width: 232,
    height: 54,
    marginLeft: 16
  },
  icon3Row: {
    height: 54,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 53,
    marginRight: 34
  },
  button2: {
    width: 115,
    height: 44,
    backgroundColor: "rgba(254,163,26,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 45,
    marginLeft: 130
  },
  change: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25,
    marginTop: 5,
    marginLeft: 7
  }
});

export default ForgotPasswordScreen;
