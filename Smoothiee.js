import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function Smoothiee(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.tropicalParadiseStack}>
          <Text style={styles.tropicalParadise}>Tropical Paradise</Text>
          <View style={styles.rect6}></View>
        </View>
      </View>
      <Image
        source={require("./assets/tropical_paradise.jpeg")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.ingredientsStack}>
        <Text style={styles.ingredients}>Ingredients</Text>
        <View style={styles.rect3}></View>
      </View>
      <View style={styles.loremIpsumStack}>
        <Text style={styles.loremIpsum}>
          -1 cup spinach or kale{"\n"}-1 cucumber, peeled and chopped{"\n"}-1
          celery stalk, chopped{"\n"}-1 carrot, peeled and chopped{"\n"}-1/2
          green apple, cored and chopped{"\n"}-1/2 lemon, juiced{"\n"}-1-inch
          piece of fresh ginger,{"\n"}-1 cup coconut water or water{"\n"}Ice
          cubes (optional)
        </Text>
        <View style={styles.rect2}></View>
      </View>
      <View style={styles.instructionsStack}>
        <Text style={styles.instructions}>Instructions:</Text>
        <View style={styles.rect4}></View>
      </View>
      <View style={styles.loremIpsum2Stack}>
        <Text style={styles.loremIpsum2}>
          1. Place all the ingredients in a blender.{"\n"}2. Blend on high speed
          until the mixture becomes smooth {"\n"}and creamy.{"\n"}3. If desired,
          add a few ice cubes and blend again for {"\n"}a chilled smoothie.
          {"\n"}4. Taste and adjust the flavors by adding more lemon {"\n"}juice
          or ginger if desired.{"\n"}5. Pour the smoothie into a glass and
          enjoy!{"\n"}Note: You can customize this recipe by adding or {"\n"}
          substituting other vegetables like bell peppers, beets,{"\n"} or
          zucchini. Feel free to experiment and find your {"\n"}favorite
          combination of vegetables for a delicious {"\n"}and nutritious
          smoothie.
        </Text>
        <View style={styles.rect5}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,221,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect1: {
    width: 375,
    height: 93,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(254,163,26,1)"
  },
  tropicalParadise: {
    top: 0,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 40,
    left: 0
  },
  rect6: {
    top: 1,
    width: 317,
    height: 56,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
    left: 2
  },
  tropicalParadiseStack: {
    width: 321,
    height: 57,
    marginTop: 36,
    marginLeft: 26
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: "#000000",
    marginLeft: 88
  },
  ingredients: {
    top: 0,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 40,
    left: 0
  },
  rect3: {
    top: 5,
    left: 1,
    width: 227,
    height: 53,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  ingredientsStack: {
    width: 228,
    height: 58,
    marginTop: 11,
    marginLeft: 76
  },
  loremIpsum: {
    top: 0,
    left: 5,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 162,
    width: 304
  },
  rect2: {
    top: 1,
    left: 0,
    width: 315,
    height: 171,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  loremIpsumStack: {
    width: 315,
    height: 172,
    marginTop: 9,
    marginLeft: 35
  },
  instructions: {
    top: 0,
    left: 7,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 40
  },
  rect4: {
    top: 1,
    left: 0,
    width: 263,
    height: 56,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  instructionsStack: {
    width: 263,
    height: 57,
    marginTop: 14,
    marginLeft: 58
  },
  loremIpsum2: {
    top: 0,
    left: 6,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12
  },
  rect5: {
    top: -1,
    left: 0,
    width: 328,
    height: 209,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  loremIpsum2Stack: {
    width: 328,
    height: 209,
    marginTop: 24,
    marginLeft: 29
  }
});

export default Smoothiee;
