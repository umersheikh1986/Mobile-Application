import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Dice = () => {
  const diceOne = require("../../assets/images/dice1.png");
  const diceTwo = require("../../assets/images/dice2.png");
  const diceThree = require("../../assets/images/dice3.png");
  const diceFour = require("../../assets/images/dice4.png");
  const diceFive = require("../../assets/images/dice5.png");
  const diceSix = require("../../assets/images/dice6.png");

  const diceImages = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];

  const randomDice1 = Math.floor(Math.random() * diceImages.length);
  const randomDice2 = Math.floor(Math.random() * diceImages.length);
  const count = randomDice1 + randomDice2 + 2;

  console.log(randomDice1);
  console.log(randomDice2);
  return (
    <View style={styles.boxContainer}>
      <View style={styles.container}>
        <Image source={diceImages[randomDice1]} style={styles.dice} />
      </View>
      <View style={styles.container}>
        <Image source={diceImages[randomDice2]} style={styles.dice} />
      </View>
      <View style={styles.container}>
        <Text style={styles.count}>{count}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: "row",
  },

  container: {
    backgroundColor: "black",
  },
  dice: {
    color: "red",
    width: 100,
    height: 100,
  },
  count: {
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: "bold",
    width: 100,
    height: "auto",
    color: "white",
    textAlign: "center",
    margin: "auto",
  },
});

export default Dice;
