// import { View, Text, StyleSheet, Image } from "react-native";
// import React from "react";

// const Dice = () => {
//   const diceOne = require("../../assets/images/dice1.png");
//   const diceTwo = require("../../assets/images/dice2.png");
//   const diceThree = require("../../assets/images/dice3.png");
//   const diceFour = require("../../assets/images/dice4.png");
//   const diceFive = require("../../assets/images/dice5.png");
//   const diceSix = require("../../assets/images/dice6.png");

//   const diceImages = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];

//   const randomDice1 = Math.floor(Math.random() * diceImages.length);
//   const randomDice2 = Math.floor(Math.random() * diceImages.length);
//   const count = randomDice1 + randomDice2 + 2;

//   console.log(randomDice1);
//   console.log(randomDice2);
//   return (
//     <View style={styles.boxContainer}>
//       <View style={styles.container}>
//         <Image source={diceImages[randomDice1]} style={styles.dice} />
//       </View>
//       <View style={styles.container}>
//         <Image source={diceImages[randomDice2]} style={styles.dice} />
//       </View>
//       <View style={styles.container}>
//         <Text style={styles.count}>{count}</Text>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   boxContainer: {
//     flexDirection: "row",
//   },

//   container: {
//     backgroundColor: "black",
//   },
//   dice: {
//     color: "red",
//     width: 100,
//     height: 100,
//   },
//   count: {
//     fontSize: 30,
//     fontFamily: "Roboto",
//     fontWeight: "bold",
//     width: 100,
//     height: "auto",
//     color: "white",
//     textAlign: "center",
//     margin: "auto",
//   },
// });

// export default Dice;


import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Easing,
} from "react-native";

const Dice = () => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [rolling, setRolling] = useState(false);
  const rotateAnim1 = useRef(new Animated.Value(0)).current;
  const rotateAnim2 = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;

  // Function to generate a random number between 1 and 6
  const rollDice = () => {
    if (!rolling) {
      setRolling(true);

      // Reset animation values
      rotateAnim1.setValue(0);
      rotateAnim2.setValue(0);
      bounceAnim.setValue(0);

      // Start rolling and bouncing animations
      Animated.parallel([
        Animated.timing(rotateAnim1, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim2, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.sequence([
          Animated.timing(bounceAnim, {
            toValue: -50,
            duration: 500,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(bounceAnim, {
            toValue: 0,
            duration: 500,
            easing: Easing.bounce,
            useNativeDriver: true,
          }),
        ]),
      ]).start(() => {
        // Set random dice values after animation
        setDice1(Math.floor(Math.random() * 6) + 1);
        setDice2(Math.floor(Math.random() * 6) + 1);
        setRolling(false);
      });
    }
  };

  // Interpolate rotation and bounce values
  const rotate1 = rotateAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const rotate2 = rotateAnim2.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const bounce = bounceAnim.interpolate({
    inputRange: [-50, 0],
    outputRange: [-50, 0],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={rollDice} disabled={rolling}>
        <View style={styles.diceContainer}>
          <Animated.View
            style={[
              styles.dice,
              {
                transform: [
                  { rotate: rotate1 },
                  { translateY: bounce },
                ],
              },
            ]}
          >
            <Text style={styles.diceText}>{dice1}</Text>
          </Animated.View>
          <Animated.View
            style={[
              styles.dice,
              {
                transform: [
                  { rotate: rotate2 },
                  { translateY: bounce },
                ],
              },
            ]}
          >
            <Text style={styles.diceText}>{dice2}</Text>
          </Animated.View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#f0f0f0",
  },
  diceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150,
  },
  dice: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  diceText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
});

export default Dice;