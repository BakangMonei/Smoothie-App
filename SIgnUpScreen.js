import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function SignUpScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}></View>
      <View style={styles.icon1Row}>
        <EntypoIcon name="lock" style={styles.icon1}></EntypoIcon>
        <View style={styles.password1Stack}>
          <Text style={styles.password1}>Password</Text>
          <View style={styles.rect1}>
            <Text style={styles.password2}>Password</Text>
          </View>
        </View>
      </View>
      <View style={styles.icon2Row}>
        <EntypoIcon name="user" style={styles.icon2}></EntypoIcon>
        <View style={styles.username1Stack}>
          <Text style={styles.username1}>Username</Text>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.username2}>Username</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.icon3Row}>
        <EntypoIcon name="mail" style={styles.icon3}></EntypoIcon>
        <View style={styles.username3Stack}>
          <Text style={styles.username3}>Username</Text>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.email}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.registerStack}>
        <Text style={styles.register}>REGISTER</Text>
        <View style={styles.rect2}></View>
      </View>
      <View style={styles.login1Stack}>
        <Text style={styles.login1}>LOGIN</Text>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.signUp}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,221,1)"
  },
  rect: {
    width: 375,
    height: 93,
    backgroundColor: "rgba(254,163,26,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  icon1: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    marginTop: 8
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
  rect1: {
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
  icon1Row: {
    height: 54,
    flexDirection: "row",
    marginTop: 318,
    marginLeft: 53,
    marginRight: 34
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    marginTop: 4
  },
  username1: {
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
  username2: {
    fontFamily: "roboto-700",
    color: "#121212",
    opacity: 0.5,
    fontSize: 20,
    marginTop: 15,
    marginLeft: 16
  },
  username1Stack: {
    width: 232,
    height: 54,
    marginLeft: 16
  },
  icon2Row: {
    height: 54,
    flexDirection: "row",
    marginTop: -147,
    marginLeft: 53,
    marginRight: 34
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    marginTop: 4
  },
  username3: {
    top: 15,
    left: 16,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    opacity: 0.5,
    fontSize: 20
  },
  button2: {
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
  email: {
    fontFamily: "roboto-700",
    color: "#121212",
    opacity: 0.5,
    fontSize: 20,
    marginTop: 15,
    marginLeft: 16
  },
  username3Stack: {
    width: 232,
    height: 54,
    marginLeft: 16
  },
  icon3Row: {
    height: 54,
    flexDirection: "row",
    marginTop: -145,
    marginLeft: 53,
    marginRight: 34
  },
  register: {
    top: 0,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 50,
    left: 0
  },
  rect2: {
    top: 0,
    left: 0,
    width: 255,
    height: 70,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  registerStack: {
    width: 255,
    height: 70,
    marginTop: -161,
    marginLeft: 60
  },
  login1: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 30,
    left: 7
  },
  button3: {
    top: 0,
    left: 0,
    width: 115,
    height: 44,
    position: "absolute",
    backgroundColor: "rgba(254,163,26,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  signUp: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25,
    marginTop: 5,
    marginLeft: 7
  },
  login1Stack: {
    width: 115,
    height: 44,
    marginTop: 320,
    marginLeft: 130
  }
});

export default SignUpScreen;
