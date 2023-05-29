import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function RecipeList(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.rect3}></View>
      </View>
      <View style={styles.textStack}>
        <Text style={styles.text}>Recipe List</Text>
        <View style={styles.rect2}></View>
      </View>
      <View style={styles.buttonStack}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.loremIpsumStack}>
            <Text style={styles.loremIpsum}>
              Pineapple, mango, banana, {"\n"}coconut milk &amp; Lemon Juice.
            </Text>
            <Text style={styles.tropicalParadise}>Tropical Paradise</Text>
            <View style={styles.rect4}></View>
            <View style={styles.rect12}></View>
          </View>
        </TouchableOpacity>
        <Image
          source={require("./assets/green_goddess.jpeg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <FeatherIcon name="star" style={styles.icon3}></FeatherIcon>
      </View>
      <View style={styles.icon4Row}>
        <FeatherIcon name="star" style={styles.icon4}></FeatherIcon>
        <View style={styles.rect7Stack}>
          <View style={styles.rect7}>
            <View style={styles.image2Row}>
              <Image
                source={require("./assets/mocha_goddess.jpeg")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
              <View style={styles.berryBlastColumn}>
                <Text style={styles.berryBlast}>Berry Blast</Text>
                <Text style={styles.loremIpsum2}>
                  Strawberries, blueberries, {"\n"} raspberries &amp; Milk
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.rect8}>
            <View style={styles.rect9}></View>
          </View>
        </View>
      </View>
      <View style={styles.icon5Row}>
        <FeatherIcon name="star" style={styles.icon5}></FeatherIcon>
        <View style={styles.rect10Stack}>
          <View style={styles.rect10}>
            <View style={styles.rect11Stack}>
              <View style={styles.rect11}>
                <View style={styles.tropicalParadise3Stack}>
                  <Text style={styles.tropicalParadise3}>
                    Tropical Paradise
                  </Text>
                  <Text style={styles.loremIpsum3}>
                    Pineapple, mango, banana, {"\n"}coconut milk &amp; Lemon
                    Juice.
                  </Text>
                </View>
              </View>
              <View style={styles.rect13}></View>
            </View>
          </View>
          <Image
            source={require("./assets/tropical_paradise.jpeg")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </View>
      </View>
      <View style={styles.icon2StackRow}>
        <View style={styles.icon2Stack}>
          <EntypoIcon
            name="chevron-with-circle-down"
            style={styles.icon2}
          ></EntypoIcon>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Favorite")}
            style={styles.button3}
          ></TouchableOpacity>
        </View>
        <View style={styles.iconStack}>
          <IoniconsIcon name="md-add-circle" style={styles.icon}></IoniconsIcon>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("AddNewRecipe")}
            style={styles.button2}
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
    width: 375,
    height: 93,
    backgroundColor: "rgba(254,163,26,1)"
  },
  rect3: {
    width: 375,
    height: 93,
    borderWidth: 1,
    borderColor: "#000000"
  },
  text: {
    top: 0,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 45,
    left: 18
  },
  rect2: {
    top: 4,
    left: 0,
    width: 266,
    height: 56,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  textStack: {
    width: 266,
    height: 63,
    marginTop: 21,
    marginLeft: 54
  },
  button: {
    top: 0,
    left: 44,
    width: 329,
    height: 101,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  loremIpsum: {
    top: 32,
    left: 102,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16
  },
  tropicalParadise: {
    top: 8,
    left: 102,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 20
  },
  rect4: {
    top: 12,
    left: 93,
    width: 228,
    height: 66,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect12: {
    top: 0,
    left: 0,
    width: 330,
    height: 101,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  loremIpsumStack: {
    width: 330,
    height: 102
  },
  image: {
    top: 8,
    left: 35,
    width: 110,
    height: 85,
    position: "absolute"
  },
  icon3: {
    top: 33,
    left: 0,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 45
  },
  buttonStack: {
    width: 374,
    height: 102,
    marginTop: 55,
    marginLeft: 1
  },
  icon4: {
    color: "rgba(0,0,0,1)",
    fontSize: 45,
    marginTop: 30
  },
  rect7: {
    top: 0,
    left: 1,
    width: 329,
    height: 97,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  image2: {
    width: 73,
    height: 76,
    marginTop: 6
  },
  berryBlast: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 21,
    marginLeft: 4
  },
  loremIpsum2: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 18
  },
  berryBlastColumn: {
    width: 230,
    marginLeft: 13,
    marginBottom: 3
  },
  image2Row: {
    height: 82,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 11,
    marginRight: 2
  },
  rect8: {
    top: 0,
    left: 0,
    width: 330,
    height: 97,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect9: {
    width: 230,
    height: 76,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 10,
    marginLeft: 98
  },
  rect7Stack: {
    width: 330,
    height: 97
  },
  icon4Row: {
    height: 97,
    flexDirection: "row",
    marginTop: 28
  },
  icon5: {
    color: "rgba(0,0,0,1)",
    fontSize: 45,
    marginTop: 45
  },
  rect10: {
    top: 24,
    left: 0,
    width: 329,
    height: 86,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  rect11: {
    top: 5,
    left: 100,
    width: 230,
    height: 76,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  tropicalParadise3: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 21
  },
  loremIpsum3: {
    top: 24,
    left: 0,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 17
  },
  tropicalParadise3Stack: {
    width: 221,
    height: 72,
    marginLeft: 1
  },
  rect13: {
    top: 0,
    left: 0,
    width: 330,
    height: 86,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect11Stack: {
    width: 330,
    height: 86
  },
  image3: {
    top: 0,
    left: 9,
    width: 73,
    height: 136,
    position: "absolute"
  },
  rect10Stack: {
    width: 330,
    height: 136
  },
  icon5Row: {
    height: 136,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 1,
    marginRight: -1
  },
  icon2: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 85
  },
  button3: {
    top: 0,
    left: 0,
    width: 85,
    height: 94,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  icon2Stack: {
    width: 85,
    height: 96
  },
  icon: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 85
  },
  button2: {
    top: 0,
    left: 0,
    width: 69,
    height: 94,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  iconStack: {
    width: 69,
    height: 94,
    marginLeft: 126
  },
  icon2StackRow: {
    height: 96,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 40,
    marginRight: 55
  }
});

export default RecipeList;
