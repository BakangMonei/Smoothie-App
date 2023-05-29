import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <EntypoIcon name="user" style={styles.icon} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.username}>Username</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.icon2Row}>
        <EntypoIcon name="lock" style={styles.icon2} />
        <View style={styles.rect1}>
          <Text style={styles.password}>Password</Text>
        </View>
      </View>
      <ImageBackground
        source={require("./assets/smoothie.png")}
        resizeMode="contain"
        style={styles.image1}
        imageStyle={styles.image1_imageStyle}
      >
        <View style={styles.rect2}></View>
      </ImageBackground>
      <TouchableOpacity onPress={() => navigation.navigate("UserMenu")} style={styles.button8}>
        <Text style={styles.login6}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.forgotPasswordRow}>
        <Text style={styles.forgotPassword}>Forgot Password??</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPasswordScreen")} style={styles.button6}>
          <Text style={styles.forgot4}>Forgot</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")} style={styles.button7}>
        <Text style={styles.register}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,221,1)"
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    marginTop: 4
  },
  button: {
    width: 232,
    height: 54,
    backgroundColor: "#E6E6E6",
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
    borderColor: "#000000",
    marginLeft: 16
  },
  username: {
    fontFamily: "roboto-700",
    color: "#121212",
    opacity: 0.5,
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15
  },
  iconRow: {
    height: 54,
    flexDirection: "row",
    marginTop: 340,
    marginLeft: 59,
    marginRight: 28
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    marginTop: 8
  },
  rect1: {
    width: 232,
    height: 54,
    backgroundColor: "#E6E6E6",
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
    borderColor: "#000000",
    marginLeft: 16
  },
  password: {
    fontFamily: "roboto-700",
    color: "#121212",
    opacity: 0.5,
    fontSize: 20,
    marginTop: 15,
    marginLeft: 17
  },
  icon2Row: {
    height: 54,
    flexDirection: "row",
    marginTop: 39,
    marginLeft: 59,
    marginRight: 28
  },
  image1: {
    height: 203,
    width: 194,
    marginTop: -388,
    marginLeft: 80
  },
  image1_imageStyle: {},
  rect2: {
    width: 194,
    height: 203,
    borderWidth: 1,
    borderColor: "#000000"
  },
  button8: {
    width: 115,
    height: 44,
    backgroundColor: "rgba(254,163,26,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 211,
    marginLeft: 149
  },
  login6: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 30,
    marginLeft: 6
  },
  forgotPassword: {
    fontFamily: "roboto-italic",
    color: "#121212",
    fontSize: 20,
    height: 24,
    width: 185,
    marginTop: 12
  },
  button6: {
    width: 115,
    height: 44,
    backgroundColor: "rgba(254,163,26,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginLeft: 12
  },
  forgot4: {
    fontFamily: "roboto-700italic",
    color: "#121212",
    textAlign: "center",
    fontSize: 25,
    marginTop: 4,
    marginLeft: 18
  },
  forgotPasswordRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 111,
    marginLeft: 28,
    marginRight: 35
  },
  button7: {
    width: 141,
    height: 44,
    backgroundColor: "rgba(254,163,26,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: -125,
    marginLeft: 135
  },
  register: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 24
  }
});

export default LoginScreen;
