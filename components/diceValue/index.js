import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const DiceValue = () => {
  const [dice, setDice] = useState([6, 4]); // Initial dice values

  useEffect(() => {
    const interval = setInterval(() => {
      setDice([
        Math.floor(Math.random() * 6) + 1, // Random number between 1-6
        Math.floor(Math.random() * 6) + 1,
      ]);
    }, 15000); // Runs every 15 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <View>
      <Text style={styles.text}>Winner</Text>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.timerText}>{dice[0]}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.timerText}>{dice[1]}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: "#000",
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#FFD700", // Golden border for casino feel
    shadowColor: "#FFD700",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  text: {
    color: "#FFD700",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: -220,
    marginTop: 10,
  },
  timerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFD700", // Golden text color
    textShadowColor: "rgba(255, 215, 0, 0.8)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  mainContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: -250,
    marginTop: 0,
  },
});

export default DiceValue;
